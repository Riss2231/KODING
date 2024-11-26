let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Fungsi untuk menampilkan slide
function showSlide(index) {
  // Pastikan index berada dalam rentang yang valid
  if (index >= totalSlides) {
    currentSlide = 0; // Kembali ke slide pertama
  } else if (index < 0) {
    currentSlide = totalSlides - 1; // Kembali ke slide terakhir
  } else {
    currentSlide = index;
  }

  // Geser slider ke posisi yang sesuai
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Fungsi untuk slide berikutnya
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Fungsi untuk slide sebelumnya
function prevSlide() {
  showSlide(currentSlide - 1);
}
