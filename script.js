
const HABBO_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/your-published-sheet-id/pub?output=tsv';

let twitchToHabboMap = {};

function loadHabboNames() {
  fetch(HABBO_SHEET_URL)
    .then(res => res.text())
    .then(text => {
      const rows = text.trim().split('\n').slice(1);
      twitchToHabboMap = {};
      for (let row of rows) {
        const [twitch, habbo] = row.split('\t');
        if (twitch && habbo) twitchToHabboMap[twitch.toLowerCase()] = habbo;
      }
    });
}

function addChatMessage(twitchName, message) {
  const habboName = twitchToHabboMap[twitchName.toLowerCase()] || 'Unknown';
  const container = document.getElementById('chat-container');
  const bubble = document.createElement('section');
  bubble.className = 'bubble animate';
  bubble.innerHTML = `
    <div class="user-section">
      <div class="username">
        <span class="name">${twitchName}</span>
        <span class="pronouns-badge">(${habboName})</span>
      </div>
    </div>
    <div class="message">
      <span class="message-wrapper">${message}</span>
    </div>
  `;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

// Simulated test message (delete this when connecting to live chat)
window.addEventListener('DOMContentLoaded', () => {
  loadHabboNames();
  setTimeout(() => addChatMessage('b0bbaTV', 'I just pulled a purple Labubu! 💜'), 1000);
});
