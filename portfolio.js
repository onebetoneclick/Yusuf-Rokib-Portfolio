/*==========================================
    YUSUF ROKIB PORTFOLIO
    Portfolio Page JavaScript
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
    SCROLL REVEAL
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

".project-card, .portfolio-filter, .cta"

).forEach(element => {

    element.classList.add("fade");

    observer.observe(element);

});


/*==========================================
    PORTFOLIO FILTER
==========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.textContent.trim().toLowerCase();

        projectCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(filter.replace(/\s+/g, "-"))) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});


/*==========================================
    PROJECT CARD HOVER
==========================================*/

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


/*==========================================
    PROJECT LINKS
==========================================*/

document.querySelectorAll(".project-links a").forEach(link => {

    link.addEventListener("click", () => {

        console.log("Opening project...");

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

console.log("Portfolio Page Loaded Successfully.");