const menu_btn = document.getElementById("menu_toggle");
const nav_bar = document.getElementById("nav_bar");

menu_btn.addEventListener("click", () => {
    nav_bar.classList.toggle("active");
});
