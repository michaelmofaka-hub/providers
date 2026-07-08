function show_profile() {
    window.location.href = "../Profile/Profile.html";
}

const menu = document.getElementById("menu_toggle");
const navList = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
    navList.classList.toggle("active");
});
