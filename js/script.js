// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Typing Effect for Hero Section
const typingElement = document.getElementById('typing-text');
const words = ["Web Developers", "Team Collaboration", "Full-Stack Learners"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingElement) return;
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Wait at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            formResponse.textContent = "Please fill in all fields.";
            formResponse.style.color = "red";
        } else if (!email.includes("@") || !email.includes(".")) {
            formResponse.textContent = "Please enter a valid email address.";
            formResponse.style.color = "red";
        } else {
            formResponse.textContent = "Thank you! Your message was sent.";
            formResponse.style.color = "green";
            contactForm.reset();
        }
    });
}