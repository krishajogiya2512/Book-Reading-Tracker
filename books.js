/**
 * BookNest Library Interaction System
 * - Intersection Observer for smooth stagger animations.
 * - Sticky navbar scroll transition.
 * - Responsive Netflix-style horizontal row sliding with controls.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Transition on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check in case page starts scrolled
    }

    // 2. Netflix-style Horizontal Scroll Rows and Arrow Navigation
    const bookRowContainers = document.querySelectorAll('.book-row-container');

    bookRowContainers.forEach(container => {
        const grid = container.querySelector('.book-grid');
        const prevArrow = container.querySelector('.scroll-arrow.prev');
        const nextArrow = container.querySelector('.scroll-arrow.next');

        if (!grid || !prevArrow || !nextArrow) return;

        // Scroll left/right based on card sizes and gaps
        const getScrollStep = () => {
            const firstCard = grid.querySelector('.book-card');
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth;
                const gap = parseInt(window.getComputedStyle(grid).gap) || 30;
                return (cardWidth + gap) * 2; // Scroll 2 cards at a time
            }
            return grid.clientWidth * 0.75; // Fallback to 75% of viewport width
        };

        nextArrow.addEventListener('click', () => {
            grid.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        });

        prevArrow.addEventListener('click', () => {
            grid.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        });

        // Show/hide scroll controls dynamically based on scroll boundaries
        const toggleArrows = () => {
            const scrollLeft = grid.scrollLeft;
            const maxScrollLeft = grid.scrollWidth - grid.clientWidth;

            // Show prev arrow if we are scrolled past the start
            if (scrollLeft <= 8) {
                prevArrow.style.display = 'none';
            } else {
                prevArrow.style.display = 'flex';
            }

            // Show next arrow if we are not at the extreme right edge
            if (scrollLeft >= maxScrollLeft - 8) {
                nextArrow.style.display = 'none';
            } else {
                nextArrow.style.display = 'flex';
            }
        };

        // Attach listeners for scroll events and resize events to update arrow visibility
        grid.addEventListener('scroll', toggleArrows);
        window.addEventListener('resize', toggleArrows);
        
        // Initial setup delay to allow images and layouts to fully paint
        setTimeout(toggleArrows, 150);
    });

    // 3. Intersection Observer Scroll Reveal for Staggered Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px', // Trigger slightly before element enters view
        threshold: 0.08
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Observe all headers and grids for a fluid staggered enter
    document.querySelectorAll('.section-header, .book-grid').forEach(element => {
        revealObserver.observe(element);
    });
});
