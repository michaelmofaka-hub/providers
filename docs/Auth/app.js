const form = document.querySelector("#signupForm");

form.addEventListener("submit", async e => {
    e.preventDefault();

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
    } else {
        alert(data.message);
    }
});
