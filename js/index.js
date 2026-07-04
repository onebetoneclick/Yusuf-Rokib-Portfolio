/*==========================================
    YUSUF ROKIB PORTFOLIO
    Home Page JavaScript
==========================================*/


/*==========================================
    MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/*==========================================
    CLOSE MENU AFTER CLICK
==========================================*/

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/*==========================================
    TYPING EFFECT
==========================================*/

const typingElement = document.getElementById("typing");

const words = [

    "Web Designer",

    "Front-End Developer",

    "UI / UX Designer",

    "Freelancer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/*==========================================
    STICKY HEADER
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,.97)";

    }

    else {

        header.style.background = "rgba(15,23,42,.88)";

    }

});


/*==========================================
    SCROLL TO TOP BUTTON
==========================================*/

const scrollButton = document.createElement("div");

scrollButton.className = "scroll-top";

scrollButton.innerHTML = "↑";

document.body.appendChild(scrollButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollButton.classList.add("active");

    }

    else {

        scrollButton.classList.remove("active");

    }

});

scrollButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==========================================
    FADE-IN ANIMATION
==========================================*/

const fadeElements = document.querySelectorAll(

    ".hero-content, .hero-image, .social-links"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-in");

        }

    });

}, {

    threshold: .25

});

fadeElements.forEach(element => {

    observer.observe(element);

});


/*==========================================
    ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            current &&

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

});


/*==========================================
    PAGE LOADED
==========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/*==========================================
    CONSOLE MESSAGE
==========================================*/

console.log(

    "Yusuf Rokib Portfolio Loaded Successfully."

);
