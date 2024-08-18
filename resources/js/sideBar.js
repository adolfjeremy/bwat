import "bootstrap";

const hamButton = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile_nav");
const mobileNavOverlay = document.querySelector(".mobile_nav_overlay");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("hamburger_open");
    mobileNav.classList.toggle("reveal");
    mobileNavOverlay.classList.toggle("slide_in");
});
