const API_BASE = window.location.origin + '/api'

let allGuides = [];
let categories = [];
let selectCategory = 'ALL';
let selectDifficulty ='ALL';
let searchTerm = '';

async function fetchCategories() {
try{
    const response = await fetch(`${API_BASE}/categories`);
    const data = await response.json();
    catagories = [{ name: 'ALL', count: 0}, ...data];
    displayCategories();

} catch (error) {
    console.error('Error fetching categories:, error');
}

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
            unpdateCategoryTabs();
            fetchGuides();
        });
    });
} 

function updateCategoryTabs() {
    document.querySelectorAll('#category-tabs .tab').forEach(tab => {
        tab.classList.toggle('tab-active', tab.dataset.category === selectedCategory);
    });
}

function setupDifficultyFilter() {
    