function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error-msg");
  
    // Your login credentials
    const validUsername = "caleb";
    const validPassword = "secretspace2003";
  
    if (
      username.toLowerCase() === validUsername.toLowerCase() &&
      password === validPassword
    ) {
      window.location.href = "home.html"; // Go to your personal page
    } else {
      error.textContent = "Incorrect login. Try again.";
    }
  }