/**
 * Scroll Reveal Animations
 * Uses Intersection Observer API for performance
 */

class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal');
        this.options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% of element is visible
        };

        this.init();
    }

    init() {
        // Check if Intersection Observer is supported
        if (!('IntersectionObserver' in window)) {
            // Fallback: show all elements immediately
            this.elements.forEach(el => el.classList.add('revealed'));
            return;
        }

        // Create observer
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            this.options
        );

        // Observe all reveal elements
        this.elements.forEach(el => {
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add revealed class
                entry.target.classList.add('revealed');

                // Remove will-change after animation completes
                setTimeout(() => {
                    entry.target.classList.add('animation-complete');
                }, 600);

                // Stop observing this element (one-time reveal)
                this.observer.unobserve(entry.target);
            }
        });
    }
}

/**
 * Hero Animation Controller
 * Manages the strikethrough and celebration text sequence
 */
class HeroAnimation {
    constructor() {
        this.strikeElement = document.querySelector('.strikethrough');
        this.celebrationElement = document.querySelector('.celebration');

        if (this.strikeElement && this.celebrationElement) {
            this.init();
        }
    }

    init() {
        // Add GPU acceleration hint
        this.strikeElement.classList.add('gpu-accelerated');
        this.celebrationElement.classList.add('gpu-accelerated');

        // Remove will-change after all animations complete (2.2s total)
        setTimeout(() => {
            this.strikeElement.classList.add('animation-complete');
            this.celebrationElement.classList.add('animation-complete');
        }, 2200);
    }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Ignore empty hash
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize all animations on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll reveal for timeline
    new ScrollReveal();

    // Initialize hero animation
    new HeroAnimation();

    // Initialize smooth scrolling
    initSmoothScroll();

    console.log('🎉 The Party Edit - Animations initialized');
});
