// nav.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (!toggle || !mobileNav) return;

  // Toggle overlay on hamburger click
  toggle.addEventListener("click", () => {
    if (mobileNav.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking a nav link
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function openMenu() {
    mobileNav.classList.add("active");
    mobileNav.classList.remove("fade-out");
    toggle.classList.add("active"); // animate hamburger → X
  }

  function closeMenu() {
    mobileNav.classList.remove("active");
    mobileNav.classList.add("fade-out");
    toggle.classList.remove("active"); // back to hamburger

    // remove fade-out after transition ends
    setTimeout(() => {
      mobileNav.classList.remove("fade-out");
    }, 400); // match your CSS transition
  }
});


