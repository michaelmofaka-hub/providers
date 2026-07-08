const form = document.getElementById("container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    if (username && password && email) {
        window.location.href = "../User/dashboard.html";
    } else {
        alert("Please fill all fields");
    }
});
