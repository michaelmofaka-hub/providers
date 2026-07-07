const menu_btn = document.getElementById("menu_toggle");
const nav_bar = document.getElementById("nav_bar");
const nav_overlay = document.getElementById("nav_overlay");

// Toggle menu open/close
menu_btn.addEventListener("click", () => {
    nav_bar.classList.toggle("active");
    nav_overlay.classList.toggle("active");
});

// Close menu when clicking overlay
nav_overlay.addEventListener("click", () => {
    nav_bar.classList.remove("active");
    nav_overlay.classList.remove("active");
});

// Close menu when clicking a link
nav_bar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav_bar.classList.remove("active");
        nav_overlay.classList.remove("active");
    });
});
