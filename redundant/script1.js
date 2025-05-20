document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle hamburger animation
        if (navMenu.classList.contains('active')) {
            hamburger.querySelectorAll('span')[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburger.querySelectorAll('span')[1].style.opacity = '0';
            hamburger.querySelectorAll('span')[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            hamburger.querySelectorAll('span')[0].style.transform = '';
            hamburger.querySelectorAll('span')[1].style.opacity = '';
            hamburger.querySelectorAll('span')[2].style.transform = '';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.querySelectorAll('span')[0].style.transform = '';
                hamburger.querySelectorAll('span')[1].style.opacity = '';
                hamburger.querySelectorAll('span')[2].style.transform = '';
            }
        });
    });
    
    // Close menu when resizing to larger screens
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.querySelectorAll('span')[0].style.transform = '';
            hamburger.querySelectorAll('span')[1].style.opacity = '';
            hamburger.querySelectorAll('span')[2].style.transform = '';
        }
    });
});








document.addEventListener('DOMContentLoaded', function() {
    // Existing hamburger menu code...
    
    // Hero section fade-in animation
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const registerButton = document.querySelector('.register-button');
    
    if (heroTitle && heroSubtitle && registerButton) {
        // Set initial opacity to 0
        heroTitle.style.opacity = '0';
        heroSubtitle.style.opacity = '0';
        registerButton.style.opacity = '0';
        
        // Fade in the elements with a delay between each
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
});






// Add this to your existing hamburger menu code
window.addEventListener('resize', function() {
    // Close menu when resizing to larger screens
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.querySelectorAll('span')[0].style.transform = '';
        hamburger.querySelectorAll('span')[1].style.opacity = '';
        hamburger.querySelectorAll('span')[2].style.transform = '';
    }
    
    // Adjust hero content position on resize
    const heroContent = document.querySelector('.hero-content');
    if (window.innerWidth <= 768 && heroContent) {
        heroContent.style.top = '80%';
    }
    if (window.innerWidth <= 480 && heroContent) {
        heroContent.style.top = '85%';
    }
});






// CONTESTANTS
// Contestants Section - Load More Functionality
document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const contestantsGrid = document.querySelector('.contestants-grid');
    
    if (viewMoreBtn && contestantsGrid) {
        viewMoreBtn.addEventListener('click', function() {
            // Create 3 more cards (you can modify this to load actual data)
            for (let i = 0; i < 3; i++) {
                const newCard = document.createElement('div');
                newCard.className = 'contestant-card';
                newCard.innerHTML = `
                    <img src="images/contestant${i+1}.jpg" alt="New Contestant" class="contestant-image">
                    <h3 class="contestant-name">New Contestant</h3>
                `;
                contestantsGrid.appendChild(newCard);
            }
            
            // Disable button if we've loaded enough (optional)
            if (contestantsGrid.children.length >= 9) {
                viewMoreBtn.disabled = true;
                viewMoreBtn.textContent = 'All Contestants Loaded';
                viewMoreBtn.style.opacity = '0.7';
            }
        });
    }
});