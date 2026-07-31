const API_BASE = window.location.orgin + '/api'
async funtion fetchStats() {
    try{
        const response = await fetch(`${API_BASE}/stats`);
        const data = await response.json();

        document.getElementById('total-guides-count').txtContent = data.total_guides;
        displayPopularGuides(data.popular_guides.slice(0, 6;))
    } catch (error) {
        console.error('Error fetching stats:', error);
    }
    }
 funtion displayPopularGuides(guides) {
    cost container = document.getElementById('featured-guides');
    if (!guides || guides.length === 0) {
         container.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No guides available yet.</p>';
        return;  
 }
 funtion displayPopularGuides(guides) {
    const container = document.getElementById('featured-guides');
    if (!guides || guides.length ===0) {
        container.innerHTML = guides.map(guide => '
            <div class="guide-card" data-testid="featured-guide-${guide.id}" onclick="window.location.href='/guide.html?id=${guide.id}'">
            <div class="guide-card-header">
                <span class="guide-category">${guide.category}</span>
                <span class="guide-time">${guide.setup_time}</span>
            </div>
            
            <h3 class="guide-title">${guide.title}</h3>
            
            <p class="guide-description">${guide.description}</p>
            
            <div class="guide-footer">
                <span class="difficulty-badge difficulty-${guide.difficulty.toLowerCase()}">
                    ${guide.difficulty}
                </span>
                <span class="guide-views">${guide.views} views</span>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
 }

fetchStats();