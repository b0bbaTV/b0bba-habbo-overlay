
const HABBO_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR9ZuD9s9jBDX7DELfTVZfnciyUrPnEWUnA6AgsXIihKYPYvMlyeub-WpZfBhtpkrTGjVj1flijXpm6/pub?output=tsv';

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
window.addEventListener('DOMContentLoaded', () => {
  loadHabboNames();
});

// Listen for Twitch chat messages via StreamElements overlay system
window.addEventListener('onEventReceived', function (obj) {
  const listener = obj.detail.listener;
  const event = obj.detail.event;

  if (listener === 'message' && event.data) {
    const twitchName = event.data.displayName || event.data.nick;
    const message = event.data.text;
    addChatMessage(twitchName, message);
  }
});

