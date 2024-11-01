document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Intersection Observer setup for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (!entry.target.classList.contains('keep-observing')) {
                    observer.unobserve(entry.target);
                }
            } else if (entry.target.classList.contains('keep-observing')) {
                entry.target.classList.remove('animate');
            }
        });
    }, observerOptions);

    // Function to add animation classes and observe elements
    function setupAnimations(elements, keepObserving = false) {
        elements.forEach(el => {
            if (el) {
                el.classList.add('animate-on-scroll');
                if (keepObserving) el.classList.add('keep-observing');
                observer.observe(el);
            }
        });
    }

    // Setup animations for various sections
    const sectionsToAnimate = [
        '.main-txt', '.events-txt', '.wrapper', '.trans', '.cards', '.partners-section'
    ];

    sectionsToAnimate.forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            if (selector === '.trans') {
                // Special handling for trans section
                const content = section.querySelector('.gaming-club-content');
                const image = section.querySelector('img');
                if (content) setupAnimations([content]);
                if (image) setupAnimations([image]);
            } else if (selector === '.partners-section') {
                // Special handling for partners section
                const content = section.querySelector('.partners-content');
                if (content) setupAnimations([content]);
            } else {
                // For other sections, animate all direct children
                setupAnimations(Array.from(section.children));
            }
        }
    });

    // Neon text animation
    const neonElements = document.querySelectorAll('.neon, .neon-text');
    neonElements.forEach(el => {
        const letters = el.textContent.split('');
        el.innerHTML = letters.map(char => 
            char === ' ' ? ' ' : `<span class="neon-letter">${char}</span>`
        ).join('');
        setupAnimations([el], true);
    });

    // Card hover effect
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0, 255, 255, 0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.3)';
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Partner logos animation
    const partnerLogos = document.querySelectorAll('.partner-logo');
    setupAnimations(partnerLogos, true);

    // Form submission
    const form = document.querySelector('form');
    const submitButton = document.getElementById('butt');
    if (form && submitButton) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Query Submitted');
            form.reset();
        });
    }
    
    // Add necessary styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1.2s ease, transform 1.2s ease;
        }
        .animate-on-scroll.animate {
            opacity: 1;
            transform: translateY(0);
        }
        .neon-letter {
            opacity: 0;
            transform: translateY(20px);
            display: inline-block;
            transition: opacity 1s ease, transform 1s ease;
        }
        .animate .neon-letter {
            opacity: 1;
            transform: translateY(0);
            transition-delay: calc(0.05s * var(--char-index));
        }
        .card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        /* Ensure partners section is visible */
        .partners-section {
            opacity: 1 !important;
            transform: none !important;
        }
    `;
    document.head.appendChild(style);

    // Initialize neon letter animations
    neonElements.forEach(el => {
        el.querySelectorAll('.neon-letter').forEach((letter, index) => {
            letter.style.setProperty('--char-index', index);
        });
    });
});




