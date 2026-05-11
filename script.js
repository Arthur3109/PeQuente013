window.addEventListener('scroll', function () {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function () {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});