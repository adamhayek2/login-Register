document.getElementById("submit").addEventListener("submit", (event) => {
  event.preventDefault();
    const user_name = document.getElementById("username").value;
    const user_password = document.getElementById("password").value;

    const getcredentials = {
        username: username,
        password: password
    };

    fetch('http://localhost/login-register-backend/signin.php', {
      method: 'POST', // Use GET or POST based on your server's handling
      headers: {
          'Content-Type': 'application/json', // Sending JSON data
      },
      body: JSON.stringify(getcredentials), // Convert data to JSON format
      
  }).then(response => response.json()) // Parse the response as JSON
    .then(data => {
        if (data["status"]) {
            window.location.href = "signup.html";
        } else {
            console.log(data["message"]);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
})