/*==========================================
    YUSUF ROKIB PORTFOLIO
    Contact Page JavaScript
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

".contact-info, .contact-form, .map-section"

).forEach(element => {

    element.classList.add("fade");

    observer.observe(element);

});


/*==========================================
    CONTACT FORM VALIDATION
==========================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector('input[name="name"]');
        const email = document.querySelector('input[name="email"]');
        const subject = document.querySelector('input[name="subject"]');
        const message = document.querySelector("textarea");

        if (
            !name.value.trim() ||
            !email.value.trim() ||
            !subject.value.trim() ||
            !message.value.trim()
        ) {

            alert("Please fill in all the required fields.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });

}


/*==========================================
    INPUT FOCUS EFFECT
==========================================*/

document.querySelectorAll("input, textarea").forEach(field => {

    field.addEventListener("focus", () => {

        field.style.borderColor = "#3b82f6";

    });

    field.addEventListener("blur", () => {

        field.style.borderColor = "";

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

console.log("Contact Page Loaded Successfully.");
