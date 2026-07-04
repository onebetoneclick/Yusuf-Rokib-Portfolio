/*==========================================
    YUSUF ROKIB PORTFOLIO
    About Page JavaScript
==========================================*/


/*==========================================
    MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

if(menuBtn){

    menuBtn.addEventListener("click", () =>{

        navMenu.classList.toggle("active");

    });

}


/*==========================================
    CLOSE MOBILE MENU
==========================================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click", ()=>{

        navMenu.classList.remove("active");

    });

});


/*==========================================
    STICKY HEADER
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        header.style.background = "rgba(15,23,42,.98)";

    }

    else{

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

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 350){

        scrollTop.classList.add("active");

    }

    else{

        scrollTop.classList.remove("active");

    }

});

scrollTop.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==========================================
    FADE-IN ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(

".about-image,.about-text,.detail,.experience-card,.about-cta"

).forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});


/*==========================================
    EXPERIENCE CARD HOVER EFFECT
==========================================*/

const cards = document.querySelectorAll(".experience-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "translateY(0px)";

    });

});


/*==========================================
    DOWNLOAD CV BUTTON
==========================================*/

const cvButton = document.querySelector(".about-text .btn");

if(cvButton){

    cvButton.addEventListener("click",(e)=>{

        e.preventDefault();

        alert("Replace this button with your CV download link.");

    });

}


/*==========================================
    PAGE LOADED
==========================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


/*==========================================
    CONSOLE MESSAGE
==========================================*/

console.log("About Page Loaded Successfully.");