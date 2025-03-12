// TOGGLE MENU

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburgerMenu.classList.toggle('active');
        const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
        hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
    });
});

// --------------------------------------------------


