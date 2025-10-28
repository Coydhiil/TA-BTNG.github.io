document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

document
  .getElementsByClassName("fa-bars")[0]
  .addEventListener("click", function () {
    if (this.classList.contains("fa-bars")) {
      this.classList.replace("fa-bars", "fa-xmark");
    } else {
      this.classList.replace("fa-xmark", "fa-bars");
    }
  });

// Form submission handling
