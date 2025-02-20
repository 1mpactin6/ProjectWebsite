document.addEventListener('DOMContentLoaded', () => {
    // Event Filter Functionality
    const eventFilter = document.getElementById('event-filter');
    const eventsContainer = document.querySelector('.events-grid');

    const events = [
        {
            title: '2025 Model UN Conference',
            date: 'March 15-17, 2025',
            location: 'New York City, NY',
            description: 'Join us for an exceptional Model UN conference featuring expert-led workshops and dynamic simulations.'
        },
        {
            title: 'Regional MUN Workshop',
            date: 'February 20-22, 2025',
            location: 'Online',
            description: 'Interactive virtual workshop for delegates at all levels of experience.'
        },
        // Add more events as needed
    ];

    function renderEvents() {
        eventsContainer.innerHTML = '';
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <div class="event-date">${event.date}</div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-location">${event.location}</p>
                <p class="event-description">${event.description}</p>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }

    eventFilter.addEventListener('change', () => {
        const filterType = eventFilter.value;
        if (filterType === 'all') {
            renderEvents();
        } else if (filterType === 'location') {
            // Implement location filtering logic
            console.log('Location filtering feature coming soon!');
        } else if (filterType === 'date') {
            // Implement date filtering logic
            console.log('Date filtering feature coming soon!');
        }
    });

    // Team Members Functionality
    const teamSection = document.querySelector('.about-team');
    
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'CEO & Founder',
            bio: 'With over 10 years of MUN experience, John leads our team with passion and expertise.',
            photo: 'team-member-1.jpg'
        },
        // Add more team members as needed
    ];

    function renderTeam() {
        teamSection.innerHTML = '';
        teamMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'team-member';
            memberCard.innerHTML = `
                <img src="References/${member.photo}" alt="${member.name}" class="team-photo">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-bio">${member.bio}</p>
            `;
            teamSection.appendChild(memberCard);
        });
    }

    // Newsletter Subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterBtn = document.querySelector('.newsletter-btn');

    newsletterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = newsletterEmail.value.trim();
        if (email) {
            // Here you would typically send the email to your server
            alert('Thank you for subscribing!');
            newsletterEmail.value = '';
        } else {
            alert('Please enter your email address.');
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
