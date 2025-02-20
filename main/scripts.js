document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Add fade-in animations to elements with data-scroll="fade-in"
    document.querySelectorAll('[data-scroll="fade-in"]').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero image
    window.addEventListener('scroll', () => {
        const heroImage = document.querySelector('.hero-image');
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = 'rgba(0, 123, 255, 0.3)';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';

    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Reset cursor when clicking
    document.addEventListener('click', () => {
        cursor.style.transform = 'scale(1)';
        setTimeout(() => {
            cursor.style.transform = 'scale(0)';
        }, 200);
    });
});
