const menu = document.getElementById("menu_toggle");
const nav_bar = document.getElementById("nav_bar");
const nav_overlay = document.getElementById("nav_overlay");

menu.addEventListener("click", () => {
    nav_bar.classList.toggle("active");
});

// Register service worker for PWA (ensure registration runs on pages that load index.js)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.error('SW registration failed:', err));
    });
}
