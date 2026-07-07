const form = document.getElementById("container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    
    if (username && password && email) {
        window.location.href = window.location.href = "/docs/Users/dashboard.html"; // <-- this one
    } else {
        alert("Please fill all fields");
    }
});