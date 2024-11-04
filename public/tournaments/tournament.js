const nxtBtn = document.querySelector(".next-btn");
const prvBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber= 0;
document.addEventListener("DOMContentLoaded", function() {
    // Hide the preloader
    function hidePreloader() {
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";
    }

    // Add a slight delay to simulate loading time if needed
    setTimeout(hidePreloader, 1000); 
});

// slider next button
nxtBtn.onclick = () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides-1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}


// slider Prev button
prvBtn.onclick = () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0 ){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Intersection Observer setup
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const mainTxt = document.querySelector('.main-txt');
    const eventsTxt = document.querySelector('.events-txt');
    const wrapper = document.querySelector('.wrapper');

    [mainTxt, eventsTxt, wrapper].forEach(el => {
        if (el) {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        }
    });
})

//Smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    // Customize the scroll speed and easing
    function smoothScroll(target, duration) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animationScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animationScroll);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animationScroll);
    }

    // Attach the smooth scroll behavior to any anchor link (adjust the selector as per your needs)
    const links = document.querySelectorAll('a[href^="#"]');  // Modify selector if needed
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScroll(targetElement, 1000);  // Adjust duration as needed (1000ms = 1 second)
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all tournament grid sections
    const previousTournaments = document.querySelector('.previous-tournaments .tournament-grid');
    const upcomingEvents = document.querySelector('.upcoming-events .tournament-grid');
    
    function adjustCards() {
        const isMobile = window.innerWidth <= 768;
        
        // Function to handle a single grid
        function handleGrid(grid) {
            if (!grid) return;
            
            const cards = grid.querySelectorAll('.box');
            
            cards.forEach((card, index) => {
                if (isMobile && index === 2) {
                    // Hide the third card on mobile
                    card.style.display = 'none';
                } else {
                    // Show all other cards
                    card.style.display = 'block';
                }
            });
            
            // Adjust the grid layout
            if (isMobile) {
                grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                grid.style.gap = '10px';
            } else {
                grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
                grid.style.gap = '20px';
            }
        }
        
        // Apply adjustments to both grids
        handleGrid(previousTournaments);
        handleGrid(upcomingEvents);
    }
    
    // Initial adjustment
    adjustCards();
    
    // Add resize listener with debouncing
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(adjustCards, 250);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Select all detail items
    const detailItems = document.querySelectorAll('.detail-item');

    // Add touch and mouse event listeners to each item
    detailItems.forEach(item => {
        // Mouse events
        item.addEventListener('mouseenter', () => {
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
        });

        // Touch events for mobile
        item.addEventListener('touchstart', (e) => {
            e.preventDefault();
            // Remove active class from all other items
            detailItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle active class on touched item
            item.classList.toggle('active');
        });
    });

    // Close active item when clicking outside
    document.addEventListener('touchstart', (e) => {
        if (!e.target.closest('.detail-item')) {
            detailItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});

