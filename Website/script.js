// Custom Cursor
const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    // Track mouse position for use in hover events
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Move cursor dot instantly with the mouse
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Change cursor size on hover over links and buttons
const hoverElements = document.querySelectorAll('a, button, .hamburger, .portfolio-item');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.5)`;
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
    });
});

// Particles background configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00e5ff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00e5ff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.8
                }
            },
            push: {
                particles_nb: 3
            }
        }
    },
    retina_detect: true
});

// Scroll animations
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    });
});

// Hero section animation delay
document.querySelectorAll('.fade-in').forEach((item, index) => {
    item.style.setProperty('--delay', `${0.2 + index * 0.2}s`);
});

// Form submit prevention (since it's just UI)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('This is just a UI demo. Form submission is not functional.');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header
                behavior: 'smooth'
            });
        }
    });
});

// Portfolio hover effect enhancement
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    const img = item.querySelector('img');
    
    item.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
}); 