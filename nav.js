// nav.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (!toggle || !mobileNav) return;

  // Open/close overlay with hamburger
  toggle.addEventListener("click", () => {
    const isActive = mobileNav.classList.contains("active");

    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking a nav link
  const links = mobileNav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function openMenu() {
    mobileNav.classList.add("active");
    toggle.classList.add("active");
  }

  function closeMenu() {
    // fade out
    mobileNav.classList.remove("active");
    mobileNav.classList.add("fade-out");
    toggle.classList.remove("active");

    // cleanup fade-out after transition
    setTimeout(() => {
      mobileNav.classList.remove("fade-out");
    }, 400); // match CSS transition
  }
});



