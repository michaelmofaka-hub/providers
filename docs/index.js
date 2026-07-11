const menu = document.getElementById("menu_toggle");
const nav_bar = document.getElementById("nav_bar");
const nav_overlay = document.getElementById("nav_overlay");

menu.addEventListener("click", () => {
    nav_bar.classList.toggle("active");
    nav_overlay.classList.toggle("active");
});
