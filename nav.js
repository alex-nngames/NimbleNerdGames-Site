document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (toggle && mobileNav) {
    // Open/close overlay
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      mobileNav.classList.toggle("active");
    });

    // Close overlay when clicking nav links
    const links = mobileNav.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
        toggle.classList.remove("active");
      });
    });
  }
});
