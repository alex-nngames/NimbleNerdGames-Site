// nav.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (!toggle || !mobileNav) return;

  // Create close button dynamically if not already in HTML
  let closeBtn = document.getElementById("close-btn");
  if (!closeBtn) {
    closeBtn = document.createElement("button");
    closeBtn.id = "close-btn";
    closeBtn.innerHTML = "&times;"; // X symbol
    mobileNav.appendChild(closeBtn);
  }

  // Open/close overlay with hamburger
  toggle.addEventListener("click", () => {
    const isActive = mobileNav.classList.contains("active");

    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu on close button click
  closeBtn.addEventListener("click", closeMenu);

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
    mobileNav.classList.remove("active");
    toggle.classList.remove("active");
  }
});


