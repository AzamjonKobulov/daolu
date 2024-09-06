// Mobile Menu
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    document
      .getElementById("mobile-menu")
      .classList.remove("-translate-x-full");
  });

document
  .getElementById("mobile-menu-close")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("-translate-x-full");
  });

document.querySelectorAll(".mobile-menu-link").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("-translate-x-full");
  });
});

// Login
document.querySelector(".login-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".wrong-login").classList.remove("hidden");
});
