let allGuides = [];
let categories = [];
let selectedCategory = 'ALL';
let selectedDifficulty = 'ALL';
let searchTerm = '';

function loadCategories() {
  const data = window.GuidesDB.getCategories();
  categories = [{ name: 'ALL', count: 0 }, ...data];
  displayCategories();
}

function displayCategories() {
  const container = document.getElementById('category-tabs');
  container.innerHTML = categories.map(cat => {
    const testId = `category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`;
    const activeClass = cat.name === selectedCategory ? 'tab-active' : '';
    return `<button class="tab ${activeClass}" data-category="${cat.name}" data-testid="${testId}">${cat.name}</button>`;
  }).join('');
  container.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      selectedCategory = e.target.dataset.category;
      updateCategoryTabs();
      loadGuides();
    });
  });
}

function updateCategoryTabs() {
  document.querySelectorAll('#category-tabs .tab').forEach(tab => {
    tab.classList.toggle('tab-active', tab.dataset.category === selectedCategory);
  });
}

function setupDifficultyFilter() {
  document.querySelectorAll('#difficulty-tabs .tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      selectedDifficulty = e.target.dataset.difficulty;
      updateDifficultyTabs();
      loadGuides();
    });
  });
}

function updateDifficultyTabs() {
  document.querySelectorAll('#difficulty-tabs .tab').forEach(tab => {
    tab.classList.toggle('tab-active', tab.dataset.difficulty === selectedDifficulty);
  });
}

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase();
    loadGuides();
  });
}

function loadGuides() {
  allGuides = window.GuidesDB.getAllGuides();
  let filtered = allGuides;

  if (selectedCategory !== 'ALL') {
    filtered = filtered.filter(g => g.category === selectedCategory);
  }
  if (selectedDifficulty !== 'ALL') {
    filtered = filtered.filter(g => g.difficulty === selectedDifficulty);
  }
  if (searchTerm) {
    filtered = filtered.filter(guide =>
      guide.title.toLowerCase().includes(searchTerm) ||
      guide.description.toLowerCase().includes(searchTerm) ||
      (guide.tags && guide.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );
  }
  displayGuides(filtered);
}

function displayGuides(guides) {
  const container = document.getElementById('guides-grid');
  const emptyState = document.getElementById('empty-state');
  const loading = document.getElementById('loading');
  if (loading) loading.style.display = 'none';
  document.getElementById('results-count').textContent = guides.length;

  if (guides.length === 0) {
    container.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }
  container.style.display = 'grid';
  emptyState.style.display = 'none';
  container.innerHTML = guides.map(guide => `
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
      ${guide.tags && guide.tags.length > 0 ? `
        <div class="guide-tags">
          ${guide.tags.slice(0, 3).map(tag => `<span class="guide-tag">${tag}</span>`).join('')}
        </div>` : ''}
    </div>
  `).join('');
  if (window.lucide) lucide.createIcons();
}

// Initialize
loadCategories();
setupDifficultyFilter();
setupSearch();
loadGuides();
