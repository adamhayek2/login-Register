document.getElementById("signup").addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    const registerCredebtials = {
        name: username,
        email: email,
        password: password
    };

    fetch('http://localhost/login-register-backend/signup.php', {
        method: 'POST', // Use GET or POST based on your server's handling
        headers: {
            'Content-Type': 'application/json', // Sending JSON data
        },
        body: JSON.stringify(registerCredebtials), // Convert data to JSON format
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        if (data["status"]) {
            window.location.href = "welcome.html";
        } else {
            console.log(data["message"]);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
);
