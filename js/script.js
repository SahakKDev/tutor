/* Toggle mobile menu */
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

/* Change navbar bg on scroll */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY === 0) {
    navbar.classList.remove("navbar-scroll");
  } else {
    navbar.classList.add("navbar-scroll");
  }
});
