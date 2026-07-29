//Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('hackclub-theme') || 'dark';
    document.body.classList.toggle('dark', savedTheme === 'dark');
}

funtion toggleTheme () {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('hackclub-theme', isDark ? 'dark' : 'light');
}

initTheme();