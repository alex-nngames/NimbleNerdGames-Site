// nav.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (!toggle || !mobileNav) return;

  // Open/close overlay
  toggle.addEventListener("click", () => {
    const isActive = mobileNav.classList.contains("active");

    if (isActive) {
      // fade out
      mobileNav.classList.remove("active");
      mobileNav.classList.add("fade-out");
      toggle.classList.remove("active");

      // remove fade-out after animation ends
      setTimeout(() => {
        mobileNav.classList.remove("fade-out");
      }, 300); // must match CSS transition time
    } else {
      // fade in
      mobileNav.classList.add("active");
      toggle.classList.add("active");
    }
  });

  // Close menu when clicking a nav link
  const links = mobileNav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      toggle.classList.remove("active");
    });
  });
});
