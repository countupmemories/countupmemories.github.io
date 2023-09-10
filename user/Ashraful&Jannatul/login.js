function checkLogin() {
    const username = "cm123"; // Change this to your desired username
    const password = "cm123"; // Change this to your desired password
    const usernameInput = document.getElementById("username-input").value;
    const passwordInput = document.getElementById("password-input").value;
    const loginIncorrect = document.getElementById("login-incorrect");
  
    if (usernameInput === username && passwordInput === password) {
      document.getElementById("login-prompt").style.display = "none";
      document.getElementById("content-container").style.display = "block";
    } else {
      loginIncorrect.textContent = "Username or password incorrect. Please try again.";
    }
  }
  