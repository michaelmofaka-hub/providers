const form = document.querySelector("#signupForm");

<<<<<<< HEAD
form.addEventListener("submit", async e => {
=======
form.addEventListener("submit", (e) => {
>>>>>>> 141e1063fa863a43a8f14fd7341570ee17259178
    e.preventDefault();

<<<<<<< HEAD
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const response = await fetch("http://localhost:8000/api/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Account created successfully!");
        window.location.href = "dashboard.html";
=======
    if (username && password && email) {
        window.location.href = "../User/dashboard.html";
>>>>>>> 141e1063fa863a43a8f14fd7341570ee17259178
    } else {
        alert(data.message);
    }
});
