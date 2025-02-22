document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button click handlers
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            // You can add specific actions here
            alert('Action triggered: ' + this.textContent);
        });
    });

    // Form submission handler
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            alert('Form submitted successfully!');
            form.reset();
        });
    });
});
