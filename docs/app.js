const menu_btn = document.getElementById("menu_toggle");
const nav_bar = document.getElementById("nav_bar");

menu_btn.addEventListener("click", ()=>{
  if(nav_bar.style.display === 'none'){
    nav_bar.style.display = 'flex';
  }
});