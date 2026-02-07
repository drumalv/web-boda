/**
 * Lazy Loading for Images
 * Handles both native lazy loading and fallback for older browsers
 */

class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        // Check if browser supports native lazy loading
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading supported
            this.images.forEach(img => {
                // Add loaded class when image loads
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });

                // If already loaded (cached)
                if (img.complete) {
                    img.classList.add('loaded');
                }
            });

            console.log('📸 Using native lazy loading');
        } else {
            // Fallback: Use Intersection Observer
            this.useFallback();
            console.log('📸 Using Intersection Observer fallback for lazy loading');
        }
    }

    useFallback() {
        const options = {
            root: null,
            rootMargin: '50px', // Start loading 50px before entering viewport
            threshold: 0
        };

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Load the image
                    this.loadImage(img);

                    // Stop observing this image
                    observer.unobserve(img);
                }
            });
        }, options);

        this.images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    loadImage(img) {
        // Get the source from data-src if available, otherwise use src
        const src = img.dataset.src || img.src;

        if (src) {
            img.src = src;

            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    }
}

/**
 * WebP Support Detection
 * Adds class to HTML element for conditional styling
 */
function detectWebPSupport() {
    const webpTest = new Image();
    webpTest.onload = webpTest.onerror = function () {
        const hasWebP = webpTest.height === 2;
        document.documentElement.classList.add(hasWebP ? 'webp' : 'no-webp');
    };
    webpTest.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

/**
 * Initialize lazy loading on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Detect WebP support
    detectWebPSupport();

    // Initialize lazy loader
    new LazyLoader();

    console.log('🖼️ Lazy loading initialized');
});

/**
 * Preload critical images
 * Call this function to preload important images (like hero background)
 */
function preloadCriticalImages() {
    const criticalImages = document.querySelectorAll('[data-preload="true"]');

    criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src || img.dataset.src;

        if (img.srcset) {
            link.imagesrcset = img.srcset;
        }

        document.head.appendChild(link);
    });
}

// Preload critical images early
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalImages);
} else {
    preloadCriticalImages();
}
