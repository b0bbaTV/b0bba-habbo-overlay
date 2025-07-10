
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('chat-container');
  const bubble = document.createElement('section');
  bubble.className = 'bubble animate';

  bubble.innerHTML = `
    <div class="user-section">
      <div class="username">
        <span class="name">b0bbaTV</span>
        <span class="pronouns-badge">(TidyRoom-69)</span>
      </div>
    </div>
    <div class="message">
      <span class="message-wrapper">omg I just won bingo again 😩🎉</span>
    </div>
  `;

  container.appendChild(bubble);
});
