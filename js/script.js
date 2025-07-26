// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.timeline-content, .education-card, .skill-category, .stat');
    
    // Check if we're returning from a detail page
    const isReturningFromDetail = sessionStorage.getItem('experienceScrollPosition') || sessionStorage.getItem('pageScrollPosition');
    
    if (isReturningFromDetail) {
        // If returning from detail page, don't animate elements initially
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'none';
        });
        
        // Restore scroll position immediately
        restoreScrollPosition();
        
        // After scroll restoration, enable animations for future interactions
        setTimeout(() => {
            animatedElements.forEach(el => {
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
        }, 300);
    } else {
        // Normal page load - animate elements
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Add smooth page transition support
    if ('viewTransition' in document) {
        document.documentElement.style.viewTransitionName = 'page';
    }
    
    // Add page transition class for smooth loading
    document.body.classList.add('page-transition');
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Re-initialize typing effect after language change
window.addEventListener('languageChanged', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Add hover effects for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-2px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Contact form validation (if you add a form later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Remove the loading animation that causes flickering
// window.addEventListener('load', () => {
//     document.body.style.opacity = '0';
//     document.body.style.transition = 'opacity 0.5s ease';
//     
//     setTimeout(() => {
//         document.body.style.opacity = '1';
//     }, 100);
// });

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #6366f1 !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Function to open experience detail page
function openExperienceDetail(experienceId) {
    // Save current scroll positions
    const experienceScroll = document.querySelector('.experience-scroll');
    if (experienceScroll) {
        sessionStorage.setItem('experienceScrollPosition', experienceScroll.scrollLeft);
    }
    // Save page scroll position
    sessionStorage.setItem('pageScrollPosition', window.pageYOffset);
    
    // Navigate immediately for smooth transition
    window.location.href = `pages/experience-details.html?id=${experienceId}`;
}

// Function to open education detail page
function openEducationDetail(educationId) {
    // Save page scroll position
    sessionStorage.setItem('pageScrollPosition', window.pageYOffset);
    
    // Navigate immediately for smooth transition
    window.location.href = `pages/education-details.html?id=${educationId}`;
}

// Function to restore scroll position when returning from detail page
function restoreScrollPosition() {
    // Restore horizontal scroll position for experience section
    const savedHorizontalPosition = sessionStorage.getItem('experienceScrollPosition');
    if (savedHorizontalPosition) {
        const experienceScroll = document.querySelector('.experience-scroll');
        if (experienceScroll) {
            experienceScroll.scrollLeft = parseInt(savedHorizontalPosition);
            // Clear the saved position after restoring
            sessionStorage.removeItem('experienceScrollPosition');
        }
    }
    
    // Restore vertical page scroll position
    const savedVerticalPosition = sessionStorage.getItem('pageScrollPosition');
    if (savedVerticalPosition) {
        window.scrollTo({
            top: parseInt(savedVerticalPosition),
            behavior: 'instant' // Use instant to avoid visual conflict
        });
        // Clear the saved position after restoring
        sessionStorage.removeItem('pageScrollPosition');
    }
} 