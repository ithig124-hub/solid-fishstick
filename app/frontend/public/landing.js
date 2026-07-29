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


}