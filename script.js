// ============================================
// MOBILE MENU
// ============================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.dropdown');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Dropdown sur mobile
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Fermer le menu mobile quand on clique sur un lien
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// ============================================
// HERO SLIDER
// ============================================
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    // Retirer la classe active de tous les slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Ajouter la classe active au slide et indicateur courant
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 5000); // Change toutes les 5 secondes
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Démarrer le slider automatiquement
if (slides.length > 0) {
    startSlider();
    
    // Clic sur les indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopSlider();
            startSlider(); // Redémarrer le timer
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
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

// Observer les cartes de service
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observer les logos clients
const clientLogos = document.querySelectorAll('.client-logo');
clientLogos.forEach((logo, index) => {
    logo.style.opacity = '0';
    logo.style.transform = 'scale(0.9)';
    logo.style.transition = `all 0.5s ease ${index * 0.05}s`;
    observer.observe(logo);
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#services') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// COUNTER ANIMATION (Stats)
// ============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const isDecimal = target.toString().includes('.');
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = isDecimal ? target.toFixed(1) : target;
            clearInterval(timer);
        } else {
            element.textContent = isDecimal ? start.toFixed(1) : Math.floor(start);
        }
    }, 16);
}

// Observer pour les stats
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const value = parseFloat(text.replace(/[^0-9.]/g, ''));
                animateCounter(stat, value);
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ============================================
// FORMULAIRE DE CONTACT (page contact)
// ============================================

// Renseigner ici l'endpoint Formspree (ex. 'https://formspree.io/f/xxxxxxxx').
// Tant qu'il est vide, le formulaire bascule sur un envoi par messagerie :
// aucun message n'est perdu et rien n'est annoncé comme envoyé à tort.
const FORM_ENDPOINT = '';
const CONTACT_EMAIL = 'contact@musiva.fr';

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const status = document.createElement('p');
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    status.style.cssText = 'margin-top:16px;padding:14px 18px;border-radius:8px;font-size:15px;display:none;';
    contactForm.appendChild(status);

    const showStatus = (message, ok) => {
        status.innerHTML = message;
        status.style.display = 'block';
        status.style.background = ok ? '#e8f5e9' : '#fdecea';
        status.style.color = ok ? '#2e7d32' : '#b3261e';
    };

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const required = contactForm.querySelectorAll('[required]');
        let firstInvalid = null;
        required.forEach((field) => {
            if (!field.value.trim()) {
                field.style.borderColor = '#e74c3c';
                if (!firstInvalid) firstInvalid = field;
            }
        });

        if (firstInvalid) {
            showStatus('Merci de renseigner tous les champs obligatoires.', false);
            firstInvalid.focus();
            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const data = new FormData(contactForm);

        if (!FORM_ENDPOINT) {
            // Repli sans back-end : on ouvre le client de messagerie pré-rempli.
            const corps = [...data.entries()]
                .map(([cle, valeur]) => `${cle} : ${valeur}`)
                .join('\n');
            const sujet = `Demande depuis musiva.fr — ${data.get('sujet') || 'contact'}`;
            window.location.href =
                `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
            showStatus(
                `Votre logiciel de messagerie vient de s'ouvrir avec le message pré-rempli. ` +
                `S'il ne s'ouvre pas, écrivez directement à <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`,
                true
            );
            return;
        }

        const initialLabel = submitBtn ? submitBtn.textContent : '';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours…';
        }

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' }
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            contactForm.reset();
            showStatus('Message envoyé. Nous vous recontactons rapidement.', true);
        } catch (error) {
            showStatus(
                `L'envoi a échoué. Écrivez-nous directement à ` +
                `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> ou appelez le 06 52 81 38 22.`,
                false
            );
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = initialLabel;
            }
        }
    });

    contactForm.querySelectorAll('input, textarea, select').forEach((field) => {
        field.addEventListener('input', () => {
            field.style.borderColor = '#e2e8f0';
        });
    });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============================================
// YEAR AUTO UPDATE (Footer)
// ============================================
const yearElement = document.querySelector('.current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🚀 Site MUSIVA - Développé avec attention', 'color: #12273d; font-size: 16px; font-weight: bold;');
console.log('%cPour toute question : contact@musiva.fr', 'color: #718096; font-size: 12px;');
