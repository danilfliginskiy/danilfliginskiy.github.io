// Mobile menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Slider functionality
const sliderStates = [0, 0, 0, 0]; // Current slide index for each slider

function changeSlide(sliderIndex, direction) {
    const slider = document.querySelectorAll('.slider-images')[sliderIndex];
    const dots = slider.parentElement.querySelectorAll('.slider-dot');
    const totalSlides = dots.length;

    sliderStates[sliderIndex] += direction;

    if (sliderStates[sliderIndex] < 0) {
        sliderStates[sliderIndex] = totalSlides - 1;
    } else if (sliderStates[sliderIndex] >= totalSlides) {
        sliderStates[sliderIndex] = 0;
    }

    updateSlider(sliderIndex);
}

function goToSlide(sliderIndex, slideIndex) {
    sliderStates[sliderIndex] = slideIndex;
    updateSlider(sliderIndex);
}

function updateSlider(sliderIndex) {
    const slider = document.querySelectorAll('.slider-images')[sliderIndex];
    const dots = slider.parentElement.querySelectorAll('.slider-dot');
    
    slider.style.transform = `translateX(-${sliderStates[sliderIndex] * 100}%)`;
    
    dots.forEach((dot, index) => {
        if (index === sliderStates[sliderIndex]) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto-play sliders (optional)
setInterval(() => {
    for (let i = 0; i < 4; i++) {
        changeSlide(i, 1);
    }
}, 5000);

// Smooth scroll
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

// Intersection Observer for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.house-card').forEach(card => {
    observer.observe(card);
});

// Book button functionality
document.querySelectorAll('.book-button').forEach(button => {
    button.addEventListener('click', function() {
        const houseName = this.closest('.house-card').querySelector('h3').textContent;
        alert(`Спасибо за интерес к "${houseName}"!\n\nСкоро с вами свяжется наш менеджер для подтверждения бронирования.`);
        // Here you can add actual booking logic or redirect to booking page
    });
});

// CTA button smooth scroll
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#houses').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Glass cards scroll to houses section
function scrollToHouses() {
    document.querySelector('#houses').scrollIntoView({
        behavior: 'smooth'
    });
}

// Parallax effect for hero section - ИСПРАВЛЕНО
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.3;
            
            // Убираем parallax эффект, который вызывал наложение
            if (scrolled < window.innerHeight) {
                // Оставляем только opacity эффект
                const opacity = 1 - (scrolled / window.innerHeight) * 0.3;
                hero.style.opacity = opacity;
            }
        });
    }
});

// Glass cards hover effect with tilt
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Add animation keyframe for fadeInUp
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isDecimal = target % 1 !== 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        
        if (isDecimal) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Observe stats and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const value = parseFloat(text);
                stat.textContent = '0';
                animateCounter(stat, value);
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Add floating animation to glass cards on load
document.addEventListener('DOMContentLoaded', () => {
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.8s ease forwards, floatCard 6s ease-in-out infinite ${index * 1.5}s`;
        }, index * 200);
    });
});

console.log('🏠 Abrau House - Website loaded successfully!');