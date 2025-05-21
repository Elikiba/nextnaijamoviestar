document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initMobileMenu();
    initHeroAnimations();
    initContestantsLoadMore();
});


/**
 * Mobile Menu Functionality - Fixed Implementation
 */
function initMobileMenu() {
    console.log('Initializing mobile menu...'); // Debug log

    const hamburger = document.querySelector('.hamburger');
    if (!hamburger) {
        console.error('Hamburger button not found!');
        return;
    }

    // Create mobile menu structure
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Clone navigation items
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length === 0) {
        console.warn('No navigation items found to clone');
    }

    const mobileNavList = document.createElement('ul');
    mobileNavList.className = 'mobile-nav-list';
    
    navItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.classList.add('mobile-nav-item');
        mobileNavList.appendChild(clone);
    });
    
    // Add login and season to mobile menu
    const mobileMenuExtra = document.createElement('div');
    mobileMenuExtra.className = 'mobile-menu-extra';
    
    const loginButton = document.querySelector('.login-button')?.cloneNode(true);
    const seasonImg = document.querySelector('.season')?.cloneNode(true);
    
    if (loginButton) mobileMenuExtra.appendChild(loginButton);
    if (seasonImg) mobileMenuExtra.appendChild(seasonImg);
    
    mobileMenu.appendChild(mobileNavList);
    mobileMenu.appendChild(mobileMenuExtra);
    document.body.appendChild(mobileMenu);

    console.log('Mobile menu created:', mobileMenu); // Debug log

    // Toggle function with state management
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        console.log('Toggling menu. New state:', isMenuOpen); // Debug log

        // Toggle classes
        hamburger.classList.toggle('active', isMenuOpen);
        mobileMenu.classList.toggle('active', isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        // Animate hamburger icon
        const spans = hamburger.querySelectorAll('span');
        if (isMenuOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    };

    // Click event for hamburger
    hamburger.addEventListener('click', function(e) {
        console.log('Hamburger clicked'); // Debug log
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !mobileMenu.contains(e.target) && e.target !== hamburger) {
            console.log('Click outside detected, closing menu'); // Debug log
            toggleMenu();
        }
    });
    
    // Close menu when clicking on nav links
    mobileNavList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Nav link clicked, closing menu'); // Debug log
            if (isMenuOpen) toggleMenu();
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (isMenuOpen && e.key === 'Escape') {
            console.log('Escape key pressed, closing menu'); // Debug log
            toggleMenu();
        }
    });

    // Close menu when resizing to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            console.log('Window resized to desktop, closing menu'); // Debug log
            toggleMenu();
        }
    });
}


/**
 * Preloader Function
 */
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;

    document.body.style.overflow = 'hidden';
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            document.body.style.overflow = '';
            setTimeout(() => preloader.remove(), 1000);
        }, 1500);
    });
    
    setTimeout(() => {
        if (document.querySelector('.preloader')) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            document.body.style.overflow = '';
            setTimeout(() => preloader.remove(), 1000);
        }
    }, 4000);
}


/**
 * Hero Section Animations
 */
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const registerButton = document.querySelector('.register-button');
    
    if (heroTitle && heroSubtitle && registerButton) {
        heroTitle.style.opacity = '0';
        heroSubtitle.style.opacity = '0';
        registerButton.style.opacity = '0';
        
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
}


/**
 * Contestants Load More Functionality
 */
function initContestantsLoadMore() {
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const contestantsGrid = document.querySelector('.contestants-grid');
    
    if (viewMoreBtn && contestantsGrid) {
        viewMoreBtn.addEventListener('click', function() {
            const currentCount = contestantsGrid.children.length;
            const names = [
                "Amina Yusuf", "Chidera Obi", "Efe Omorodion", 
                "Fatima Bello", "Gbenga Adeleke", "Ifeoma Okoro",
                "Jide Adeoye", "Funke Adetiba", "Lola Shoneye",
                "Kemi Aliu", "Chinaza Ezeonu", "Aminat Jacobs",
                "Chisom Ozokwor", "Adaeze Nwokoye", "Funke Mofe-Damijo"
            ];
            
            for (let i = 0; i < 6 && currentCount + i < 15; i++) {
                const newCard = document.createElement('div');
                newCard.className = 'contestant-card';
                newCard.innerHTML = `
                    <img src="images/contestant${currentCount + i % 2 === 0 ? '' : '-mcomp'}.png" alt="${names[currentCount + i]}" class="contestant-image">
                    <h3 class="contestant-name">${names[currentCount + i]}</h3>
                `;
                contestantsGrid.appendChild(newCard);
                
                setTimeout(() => {
                    newCard.style.opacity = '1';
                    newCard.style.transform = 'translateY(0)';
                }, 100 * i);
            }
            
            if (contestantsGrid.children.length >= 15) {
                viewMoreBtn.disabled = true;
                viewMoreBtn.textContent = 'All Contestants Loaded';
                viewMoreBtn.style.opacity = '0.7';
            }
        });
    }
}