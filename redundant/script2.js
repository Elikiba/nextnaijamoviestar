// Preloader Function
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;
    
    // Prevent scrolling during preloader
    document.body.style.overflow = 'hidden';
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            document.body.style.overflow = '';
            
            // Remove preloader after animation completes
            setTimeout(() => preloader.remove(), 1000);
        }, 1500); // Adjust this timing as needed
    });
    
    // Fallback in case window.load doesn't fire
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        document.body.style.overflow = '';
        setTimeout(() => preloader.remove(), 1000);
    }, 4000);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start with preloader
    initPreloader();
    
    // Then initialize all other functions
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // ... rest of your existing DOMContentLoaded code ...
});


document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        // Toggle active classes
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
    
    // Close menu when clicking on a link (mobile only)
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    });
    
    // Hero Section Animation
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const registerButton = document.querySelector('.register-button');
    
    if (heroTitle && heroSubtitle && registerButton) {
        // Set initial state
        heroTitle.style.opacity = '0';
        heroSubtitle.style.opacity = '0';
        registerButton.style.opacity = '0';
        
        // Animate elements with delay
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1s ease-in-out';
            heroTitle.style.opacity = '1';
        }, 300);
        
        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 1s ease-in-out';
            heroSubtitle.style.opacity = '1';
        }, 800);
        
        setTimeout(() => {
            registerButton.style.transition = 'opacity 1s ease-in-out, transform 0.3s ease';
            registerButton.style.opacity = '1';
        }, 1200);
    }
    
    // Contestants Load More Functionality
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const contestantsGrid = document.querySelector('.contestants-grid');
    
    if (viewMoreBtn && contestantsGrid) {
        viewMoreBtn.addEventListener('click', function() {
            // Create 3 more cards
            for (let i = 0; i < 6; i++) {
                const newCard = document.createElement('div');
                newCard.className = 'contestant-card';
                newCard.innerHTML = `
                    <img src="images/contestant${i+1}.jpg" alt="New Contestant" class="contestant-image">
                    <h3 class="contestant-name">New Contestant</h3>
                `;
                contestantsGrid.appendChild(newCard);
            }
            
            // Disable button if we've loaded enough
            if (contestantsGrid.children.length >= 9) {
                viewMoreBtn.disabled = true;
                viewMoreBtn.textContent = 'All Contestants Loaded';
                viewMoreBtn.style.opacity = '0.7';
            }
        });
    }
    
    // Window Resize Handler
    window.addEventListener('resize', function() {
        // Close menu when resizing to larger screens
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
        
        // Adjust hero content position on resize
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            if (window.innerWidth <= 768) {
                heroContent.style.top = '80%';
            }
            if (window.innerWidth <= 480) {
                heroContent.style.top = '85%';
            }
        }
    });
});