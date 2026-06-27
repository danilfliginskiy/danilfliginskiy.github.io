/* ========================================
   ОЛИМПИЯ - JavaScript
   Интерактивность и анимации
======================================== */

'use strict';

// ========================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initSmoothScroll();
    initHeaderScroll();
    initModalWindows();
    initAnimations();
    initParallax();
    initServicesSlider();
    initAOS(); // Новая функция для анимаций
    initServiceCards(); // Анимации карточек услуг
});

// ========================================
// AOS - АНИМАЦИИ ПРИ СКРОЛЛЕ
// ========================================

function initAOS() {
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Получаем задержку из атрибута data-aos-delay
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
                
                // Отключаем наблюдение после анимации
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// АНИМАЦИИ КАРТОЧЕК УСЛУГ
// ========================================

function initServiceCards() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach((item, index) => {
        // Добавляем эффект параллакса при движении мыши
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            const image = item.querySelector('.service-item__icon img');
            if (image) {
                image.style.transform = `
                    scale(1.1) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                `;
            }
        });
        
        // Сброс при уходе мыши
        item.addEventListener('mouseleave', () => {
            const image = item.querySelector('.service-item__icon img');
            if (image) {
                image.style.transform = 'scale(1) rotateX(0) rotateY(0)';
            }
        });
        
        // Отслеживание кликов на ссылки
        const link = item.querySelector('.service-item__link');
        if (link) {
            link.addEventListener('click', (e) => {
                const serviceName = item.querySelector('.service-item__title').textContent;
                trackEvent('Service', 'Click', serviceName);
            });
        }
    });
    
    // Анимация счетчиков в номерах
    animateServiceNumbers();
}

// ========================================
// АНИМАЦИЯ НОМЕРОВ УСЛУГ
// ========================================

function animateServiceNumbers() {
    const numbers = document.querySelectorAll('.service-item__number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                const targetNumber = parseInt(number.textContent);
                
                animateNumber(number, 0, targetNumber, 800);
                observer.unobserve(number);
            }
        });
    }, observerOptions);
    
    numbers.forEach(number => observer.observe(number));
}

function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = String(end).padStart(2, '0');
            clearInterval(timer);
        } else {
            element.textContent = String(Math.floor(current)).padStart(2, '0');
        }
    }, 16);
}

// ========================================
// СЛАЙДЕР УСЛУГ (БЕЗ AUTOPLAY)
// ========================================

function initServicesSlider() {
    const track = document.querySelector('.services-slider__track');
    const slides = document.querySelectorAll('.service-card');
    const dots = document.querySelectorAll('.services-slider__dot');
    const prevBtn = document.querySelector('.services-slider__arrow--prev');
    const nextBtn = document.querySelector('.services-slider__arrow--next');

    if (!track || slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    let isTransitioning = false;

    // Функция переключения слайда
    function goToSlide(index) {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentSlide = index;

        // Обновление позиции трека
        const offset = -currentSlide * 100;
        track.style.transform = `translateX(${offset}%)`;

        // Обновление активной точки
        updateDots();

        // Сброс флага после анимации
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    // Обновление индикаторов
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Следующий слайд
    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        goToSlide(next);
    }

    // Предыдущий слайд
    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prev);
    }

    // Обработчики кнопок
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            trackEvent('Slider', 'Click', 'Hero Slider Next');
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            trackEvent('Slider', 'Click', 'Hero Slider Previous');
        });
    }

    // Обработчики точек
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            trackEvent('Slider', 'Click', `Hero Slider Dot ${index + 1}`);
        });
    });

    // Свайпы для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Управление клавиатурой
    document.addEventListener('keydown', (e) => {
        const heroSection = document.querySelector('.hero');
        const rect = heroSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    });
}

// ========================================
// BURGER MENU
// ========================================

function initBurgerMenu() {
    const burger = document.querySelector('.nav__burger');
    const menu = document.querySelector('.nav__menu');
    const menuLinks = document.querySelectorAll('.nav__link');
    const body = document.body;

    if (!burger || !menu) return;

    // Открытие/закрытие меню
    burger.addEventListener('click', () => {
        toggleMenu();
    });

    // Закрытие при клике на ссылку
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && 
            !menu.contains(e.target) && 
            !burger.contains(e.target)) {
            toggleMenu();
        }
    });

    // Закрытие при нажатии ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            toggleMenu();
        }
    });

    function toggleMenu() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }
}

// ========================================
// ПЛАВНАЯ ПРОКРУТКА
// ========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Трекинг навигации
                trackEvent('Navigation', 'Click', targetId);
            }
        });
    });
}

// ========================================
// ИЗМЕНЕНИЕ HEADER ПРИ СКРОЛЛЕ
// ========================================

function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        // Добавление фона при скролле
        if (currentScroll > 100) {
            header.style.background = 'rgba(41, 41, 41, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            header.style.padding = '15px 0';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
            header.style.padding = '25px 0';
        }

        lastScroll = currentScroll;
    }
}

// ========================================
// МОДАЛЬНЫЕ ОКНА
// ========================================

function initModalWindows() {
    const modalButtons = document.querySelectorAll('[data-modal]');
    
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalType = button.getAttribute('data-modal');
            openModal(modalType);
        });
    });

    function openModal(type) {
        console.log(`Открытие модального окна: ${type}`);
        
        // Отслеживание события
        trackEvent('Modal', 'Open', type);
        
        if (type === 'trial') {
            alert('Отлично! Оставьте свои контакты, и мы свяжемся с вами для записи на бесплатную пробную тренировку.\n\nТелефон: +7 (863) 299-99-99');
        } else if (type === 'consultation') {
            alert('Спасибо за интерес! Наш специалист свяжется с вами в ближайшее время для подбора индивидуальной программы.\n\nТелефон: +7 (863) 299-99-99');
        }
    }
}

// ========================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ (Intersection Observer)
// ========================================

function initAnimations() {
    const animatedElements = document.querySelectorAll('.feature');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        // Только для элементов, которые еще не анимированы
        if (!element.classList.contains('service-card')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        observer.observe(element);
    });
}

// ========================================
// PARALLAX ЭФФЕКТ ДЛЯ ФОНА
// ========================================

function initParallax() {
    const heroBackground = document.querySelector('.hero__background');
    if (!heroBackground) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        if (scrolled <= heroHeight) {
            const parallaxSpeed = 0.5;
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    }
}

// ========================================
// LAZY LOADING ДЛЯ ИЗОБРАЖЕНИЙ
// ========================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    img.classList.add('loading');
                    
                    img.addEventListener('load', () => {
                        img.classList.remove('loading');
                        img.classList.add('loaded');
                    });
                    
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Запуск lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// ========================================
// АНАЛИТИКА (Google Analytics / Yandex Metrika)
// ========================================

function trackEvent(category, action, label) {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }

    // Yandex Metrika
    if (typeof ym !== 'undefined') {
        ym(XXXXXX, 'reachGoal', action);
    }

    console.log(`📊 Event: ${category} - ${action} - ${label}`);
}

// ========================================
// УТИЛИТЫ
// ========================================

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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// CONSOLE LOG
// ========================================

console.log('%c🏋️ ОЛИМПИЯ - Сеть спортивных клубов', 'color: #AE040F; font-size: 20px; font-weight: bold;');
console.log('%c✓ Сайт успешно загружен!', 'color: #4CAF50; font-size: 14px;');
console.log('%c✓ Слайдер активирован', 'color: #4CAF50; font-size: 12px;');
console.log('%c✓ Анимации инициализированы', 'color: #4CAF50; font-size: 12px;');
console.log('%c✓ AOS анимации активны', 'color: #4CAF50; font-size: 12px;');