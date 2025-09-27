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

  // Close when clicking a nav link inside overlay
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function openMenu() {
    mobileNav.classList.add("active");
    mobileNav.classList.remove("fade-out");
    toggle.classList.add("active");
  }

  function closeMenu() {
    mobileNav.classList.remove("active");
    mobileNav.classList.add("fade-out");
    toggle.classList.remove("active");

    // Ensure fade-out is cleared after transition (matches CSS timing)
    setTimeout(() => {
      mobileNav.classList.remove("fade-out");
    }, 400);
  }
});

