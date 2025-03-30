document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const openIcon = document.querySelector(".open-icon");
    const closeIcon = document.querySelector(".close-icon");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    });
});
