const messageInput = document.getElementById('message-input');
const addMessageButton = document.getElementById('add-message');
const messageList = document.getElementById('message-list');

// Load messages from local storage on page load
document.addEventListener('DOMContentLoaded', loadMessages);

// Add event listener to button
addMessageButton.addEventListener('click', addMessage);

// Add message on pressing Enter key
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addMessage();
});

function addMessage() {
  const messageText = messageInput.value.trim();
  if (messageText === '') {
    alert('Please type a message before adding.');
    return;
  }

  // Create a new message element
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = messageText;

  // Append message to the list
  messageList.appendChild(messageElement);

  // Save message to local storage
  saveMessage(messageText);

  // Clear input field
  messageInput.value = '';

  // Scroll to the latest message
  messageList.scrollTop = messageList.scrollHeight;
}

function saveMessage(message) {
  const messages = getMessagesFromStorage();
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessages() {
  const messages = getMessagesFromStorage();
  messages.forEach((message) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    messageList.appendChild(messageElement);
  });
}

function getMessagesFromStorage() {
  const messages = localStorage.getItem('messages');
  return messages ? JSON.parse(messages) : [];
}
