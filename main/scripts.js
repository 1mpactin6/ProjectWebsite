document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle
    const toggleDarkMode = document.getElementById('toggleDarkMode');
    const html = document.documentElement;
    let isDarkMode = false;

    toggleDarkMode.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            html.classList.add('dark-mode');
            toggleDarkMode.textContent = 'Toggle Light Mode';
        } else {
            html.classList.remove('dark-mode');
            toggleDarkMode.textContent = 'Toggle Dark Mode';
        }
    });
});
