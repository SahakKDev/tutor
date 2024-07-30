document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
