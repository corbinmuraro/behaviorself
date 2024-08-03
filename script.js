document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("mobile-nav-icon");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-action");

  menuIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    });
  });
});
