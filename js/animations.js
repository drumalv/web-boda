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
 * TimelineProgress Controller
 * Dynamically draws the vertical connection line matching user scroll
 */
class TimelineProgress {
    constructor() {
        this.container = document.querySelector('.timeline__container');
        if (this.container) {
            this.progressLine = null;
            this.init();
        }
    }

    init() {
        // Create progress line element
        this.progressLine = document.createElement('div');
        this.progressLine.classList.add('timeline__progress-line');
        this.container.appendChild(this.progressLine);

        // Bind scroll and resize events
        window.addEventListener('scroll', () => this.updateProgress(), { passive: true });
        window.addEventListener('resize', () => this.updateProgress(), { passive: true });

        // Run initially
        this.updateProgress();
    }

    updateProgress() {
        const containerRect = this.container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // If timeline hasn't entered viewport
        if (containerRect.top > windowHeight) {
            this.progressLine.style.height = '0%';
            return;
        }

        // Draw starts when top of timeline passes 60% of viewport
        const triggerPoint = windowHeight * 0.6;
        const totalHeight = containerRect.height;
        const scrolled = triggerPoint - containerRect.top;

        let progress = (scrolled / totalHeight) * 100;
        progress = Math.max(0, Math.min(100, progress));

        this.progressLine.style.height = `${progress}%`;
    }
}

/**
 * Initialize all animations on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll reveal for timeline & other elements
    new ScrollReveal();

    // Initialize timeline path progress drawing
    new TimelineProgress();

    // Initialize hero animation
    new HeroAnimation();

    // Initialize smooth scrolling
    initSmoothScroll();



    console.log('🎉 The Party Edit - Animations initialized');
});
