
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('chat-container');
  const sample = document.createElement('section');
  sample.className = 'bubble animate';
  sample.innerHTML = `
    <div class="username-box">
      <div class="username">b0bbaTV <span class="pronouns-badge">(TidyRoom-69)</span></div>
    </div>
    <div class="message"><span class="message-wrapper">omg I just won bingo again 😩🎉</span></div>
  `;
  container.appendChild(sample);
});
