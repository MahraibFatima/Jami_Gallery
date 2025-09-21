// Portfolio Configuration
const portfolioConfig = {
    totalImages: 76,
    basePath: './assets/img/',
    imageExtension: '.jpg',
    animations: {
        duration: 6,
        maxXOffset: 4,
        maxYOffset: 4,
        delayIncrement: 0.1
    }
};

// Generate animation properties for each image
function getAnimationProps(index, total) {
    return {
        delay: (index * portfolioConfig.animations.delayIncrement) % 3,
        xOffset: ((index % 7) - 3) * 1.5,
        yOffset: ((index % 5) - 2) * 2,
        duration: 5 + (index % 3)
    };
}

// Generate image data
function generateImageData() {
    return Array.from({ length: portfolioConfig.totalImages }, (_, i) => {
        const imageNumber = i + 1;
        return {
            id: imageNumber,
            src: `${portfolioConfig.basePath}${imageNumber}${portfolioConfig.imageExtension}`,
            alt: `Portfolio image ${imageNumber}`,
            number: imageNumber
        };
    });
}

// Create floating grid items
function createFloatingGrid() {
    const grid = document.getElementById('imageGrid');
    const imageData = generateImageData();

    imageData.forEach((imgData, index) => {
        const animProps = getAnimationProps(index, imageData.length);
        
        // Create floating item container
        const floatingItem = document.createElement('div');
        floatingItem.className = 'floating-item';
        floatingItem.style.setProperty('--delay', `${animProps.delay}s`);
        floatingItem.style.setProperty('--x-offset', `${animProps.xOffset}vw`);
        floatingItem.style.setProperty('--y-offset', `${animProps.yOffset}vh`);
        floatingItem.style.setProperty('--duration', `${animProps.duration}s`);

        // Create image element
        const img = document.createElement('img');
        img.className = 'floating-img';
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.loading = index < 10 ? 'eager' : 'lazy';
        
        // Add placeholder class initially
        img.classList.add('img-placeholder');
        
        // Remove placeholder when image loads
        img.onload = function() {
            img.classList.remove('img-placeholder');
        };

        // Handle image load errors
        img.onerror = function() {
            // Fallback to a placeholder or hide the item
            img.style.display = 'none';
            console.warn(`Failed to load image: ${imgData.src}`);
        };

        floatingItem.appendChild(img);
        grid.appendChild(floatingItem);
    });
}

// Modal functionality - Single Image View
function initModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    if (!modal || !modalImg || !closeBtn) return;

    // Function to open modal with image
    function openModal(imageSrc, imageAlt) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        modalImg.alt = imageAlt || '';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Add show class for smooth animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }, 300);
    }

    // Add click event listeners to all images
    function addImageClickListeners() {
        document.querySelectorAll('.floating-img').forEach(img => {
            img.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openModal(this.src, this.alt);
            });
        });
    }

    // Close modal when clicking the X (top-left cross)
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeModal();
    });

    // Close modal when clicking outside the image (on the dark background)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Prevent modal from closing when clicking on the image itself
    modalImg.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Initialize click listeners after images are loaded
    addImageClickListeners();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createFloatingGrid();
    initModal();
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    // Recalculate any responsive elements if needed
});