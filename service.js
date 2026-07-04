/*==========================================
    YUSUF ROKIB PORTFOLIO
    Services Page JavaScript
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
    CLOSE MOBILE MENU
==========================================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/*==========================================
    STICKY HEADER
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,.98)";

    } else {

        header.style.background = "rgba(15,23,42,.88)";

    }

});


/*==========================================
    SCROLL TO TOP BUTTON
==========================================*/

const scrollTop = document.createElement("div");

scrollTop.className = "scroll-top";

scrollTop.innerHTML = "<i class='fas fa-arrow-up'></i>";

document.body.appendChild(scrollTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        scrollTop.classList.add("active");

    } else {

        scrollTop.classList.remove("active");

    }

});

scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==========================================
    SCROLL REVEAL ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

".service-card, .process-card, .cta"

).forEach(element => {

    element.classList.add("fade");

    observer.observe(element);

});


/*==========================================
    SERVICE CARD HOVER EFFECT
==========================================*/

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


/*==========================================
    PROCESS CARD ANIMATION
==========================================*/

const processCards = document.querySelectorAll(".process-card");

processCards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.2}s`;

});


/*==========================================
    CTA BUTTON
==========================================*/

const ctaButton = document.querySelector(".cta .btn");

if (ctaButton) {

    ctaButton.addEventListener("click", () => {

        console.log("Redirecting to Contact Page...");

    });

}


/*==========================================
    PAGE LOADED
==========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/*==========================================
    CONSOLE MESSAGE
==========================================*/

console.log("Services Page Loaded Successfully.");