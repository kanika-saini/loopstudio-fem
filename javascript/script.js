const mainNav = document.querySelector(".nav");
const navToggle = document.querySelector(".btn-mobile-nav");
let body = document.querySelector("body");
navToggle.addEventListener("click", function () {
  const visible = mainNav.getAttribute("data-visible");
  if (visible === "false") {
    mainNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    body.style.overflow = "hidden";
  } else if (visible === "true") {
    mainNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    body.style.overflow = "visible";
  }
});
