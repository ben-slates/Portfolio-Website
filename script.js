/* ============================================
   PREMIUM RED TEAMER PORTFOLIO - JAVASCRIPT
   Advanced Interactions, Animations & Effects
   ============================================ */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
});

function initializePortfolio() {
    setupNavigation();
    loadProjectsAndResearch();
    setupInteractivity();
    setupScrollAnimations();
    setupActiveNavLink();
    setupParallax();
    setupCopyToClipboard();
}

// ============================================
// NAVIGATION
// ============================================

function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// LOAD PROJECTS AND RESEARCH
// ============================================

function loadProjectsAndResearch() {
    const projectsGrid = document.getElementById('projectsGrid');

    if (projectsData && projectsData.projects && projectsGrid) {
        projectsData.projects.forEach((project, index) => {
            const projectCard = createProjectCard(project);
            projectCard.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
            projectsGrid.appendChild(projectCard);
        });
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const tagsHTML = project.tools.map(tool => 
        `<span class="project-tag">${tool}</span>`
    ).join('');
    
    card.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-links">
            <a href="${project.github}" target="_blank" class="project-link">GitHub</a>
            <a href="${project.writeup}" target="_blank" class="project-link">Writeup</a>
        </div>
    `;
    
    return card;
}

// ============================================
// INTERACTIVITY
// ============================================

function setupInteractivity() {
    // PGP Toggle
    const pgpToggle = document.getElementById('pgpToggle');
    const pgpContainer = document.getElementById('pgpContainer');
    
    if (pgpToggle && pgpContainer) {
        pgpToggle.addEventListener('click', () => {
            const isVisible = pgpContainer.style.display !== 'none';
            pgpContainer.style.display = isVisible ? 'none' : 'block';
            pgpToggle.textContent = isVisible ? '🔐 View PGP Public Key' : '🔐 Hide PGP Public Key';
        });
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.expertise-card, .cert-card, .project-card, .achievement-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ============================================
// ACTIVE NAVIGATION HIGHLIGHT
// ============================================

function setupActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = 'var(--text-secondary)';
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.style.color = 'var(--accent-emerald)';
            }
        });
    });
}

// ============================================
// PARALLAX EFFECT
// ============================================

function setupParallax() {
    const heroBg = document.querySelector('.hero-bg-image');
    
    if (!heroBg) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        const heroHeight = heroSection.offsetHeight;
        
        if (scrolled < heroHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ============================================
// COPY TO CLIPBOARD
// ============================================

function setupCopyToClipboard() {
    const pgpKey = document.querySelector('.pgp-key pre');
    
    if (pgpKey) {
        pgpKey.style.cursor = 'pointer';
        pgpKey.title = 'Click to copy';
        
        pgpKey.addEventListener('click', () => {
            const text = pgpKey.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = pgpKey.textContent;
                pgpKey.textContent = '✓ Copied to clipboard';
                setTimeout(() => {
                    pgpKey.textContent = originalText;
                }, 2000);
            });
        });
    }
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

function smoothScroll(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
        
        if (elapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// ANALYTICS (Optional)
// ============================================

function trackPageView() {
    // Add your analytics code here
    console.log('Portfolio loaded');
}

trackPageView();

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// ============================================
// RESPONSIVE CHECKS
// ============================================

function isMobile() {
    return window.innerWidth <= 768;
}

function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    });
}
