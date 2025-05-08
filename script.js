function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error-msg");
  
    // Customize your login credentials here
    const validUsername = "jessica";
    const validPassword = "secret123";
  
    if (username === validUsername && password === validPassword) {
      window.location.href = "home.html"; // Redirect to personal space
    } else {
      error.textContent = "Incorrect login. Try again.";
    }
  }
  