// TOGGLE MENU
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("nav ul");

    hamburgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburgerMenu.classList.toggle("active");
        const isExpanded = hamburgerMenu.getAttribute("aria-expanded") === "true";
        hamburgerMenu.setAttribute("aria-expanded", !isExpanded);
    });
});

// --------------------------------------------------

// GET STARTED MODAL
document.addEventListener("DOMContentLoaded", function() {
    const getStartedButton = document.querySelector(".btn-main");
    const modal = document.getElementById("get-started-modal");
    const closeModal = document.querySelector(".close-modal");
    const modalLoginBtn = document.getElementById("modal-login-btn");
    const modalSignupBtn = document.getElementById("modal-signup-btn");
    const navbarLoginLink = document.getElementById("login-link");

    if (getStartedButton) {
        getStartedButton.addEventListener("click", function(event) {
            event.preventDefault();
            modal.style.display = "flex";
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", function() {
            modal.style.display = "none";
        });
    }

    // Close modal if clicked outside of it
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    if (modalLoginBtn) {
        modalLoginBtn.addEventListener("click", function() {
            modal.style.display = "none"; // Close the initial modal
            showLoginForm();
        });
    }
    if (modalSignupBtn){
        modalSignupBtn.addEventListener("click", function(){
            modal.style.display = "none";
        })
    }
    // navbar login link
    if (navbarLoginLink) {
        navbarLoginLink.addEventListener("click", function(event) {
            event.preventDefault();
            showLoginForm();
        });
    }
});

function showLoginForm() {
    const loginModal = document.createElement("div");
    loginModal.id = "login-modal";
    loginModal.className = "modal";

    const loginModalContent = document.createElement("div");
    loginModalContent.className = "modal-content";
    loginModalContent.innerHTML = `
        <span class="close-login-modal">&times;</span>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password">
            <button type="submit">Login</button>
        </form>
    `;

    loginModal.appendChild(loginModalContent);
    document.body.appendChild(loginModal);

    const closeLoginModal = loginModal.querySelector(".close-login-modal");
    closeLoginModal.addEventListener("click", function() {
        loginModal.remove();
    });

    window.addEventListener("click", function(event) {
        if (event.target === loginModal) {
            loginModal.remove();
        }
    });

    // Add validation
    const loginForm = loginModal.querySelector("#login-form");
    loginForm.addEventListener("submit", function(event) {
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (!username || !password) {
            event.preventDefault();
            alert("Please enter both username and password");
        } else {
            
            alert("Login successful!");
            loginModal.remove();
        }
    });
}