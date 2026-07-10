const menu = document.getElementById("menu_toggle");
const nav_bar = document.getElementById("nav_bar");

menu.addEventListener("click", () => {
    if (nav_bar.style.display === "none") {
        nav_bar.classList.toggle("active");
    }
});
