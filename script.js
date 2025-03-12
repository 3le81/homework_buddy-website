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

// GET STARTED MODAL
document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('.btn-main');
    const modal = document.getElementById('get-started-modal');
    const closeModal = document.querySelector('.close-modal');

    if (getStartedButton) {
        getStartedButton.addEventListener('click', function(event) {
            event.preventDefault();
            modal.style.display = 'flex';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal if clicked outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});