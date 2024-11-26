let currentIndex = 0; // Indeks slide saat ini
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Perulangan ke slide pertama jika akhir tercapai
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Pindah slide setiap 3 detik
setInterval(showNextSlide, 3000);

document.getElementById("backButton").addEventListener("click", function () {
  if (document.referrer) { // Cek apakah ada halaman sebelumnya
      window.location.href = document.referrer; // Arahkan ke halaman sebelumnya
  } else {
      window.location.href = "index.html"; // Jika tidak ada, kembali ke halaman utama
  }
});