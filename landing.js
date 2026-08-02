// Homepage — uses window.GuidesDB from guides-data.js
function renderCard(guide) {
  return `
    <div class="guide-card" data-testid="guide-card-${guide.id}" onclick="window.location.href='guide.html?id=${guide.id}'">
      <div class="guide-card-header">
        <span class="guide-category">${guide.category}</span>
        <span class="guide-time">${guide.setup_time}</span>
      </div>
      <h3 class="guide-title">${guide.title}</h3>
      <p class="guide-description">${guide.description}</p>
      <div class="guide-footer">
        <span class="difficulty-badge difficulty-${guide.difficulty.toLowerCase()}">${guide.difficulty}</span>
        <span class="guide-views">${guide.views} views</span>
      </div>
    </div>`;
}

function initHome() {
  if (!window.GuidesDB) { console.error('guides-data.js not loaded'); return; }
  const guides = window.GuidesDB.getAllGuides();

  const countEl = document.getElementById('total-guides-count');
  if (countEl) countEl.textContent = guides.length;

  const featured = document.getElementById('featured-guides');
  if (featured) {
    const top = [...guides].sort((a, b) => b.views - a.views).slice(0, 6);
    featured.innerHTML = top.map(renderCard).join('');
  }
  if (window.lucide) lucide.createIcons();
}
initHome();
