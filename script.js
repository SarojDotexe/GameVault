const users = {
    "user1": "password123",
    "admin": "admin123",
    "testuser": "testpass"
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (users[username] && users[username] === password) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to a dashboard page
    } else {
        errorMessage.style.display = "block";
    }
});
