//your JS code here. If required.
// Check if there are saved details in local storage
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

// Display "Login as existing user" button if saved details exist
if (savedUsername && savedPassword) {
  const existingButton = document.createElement("button");
  existingButton.textContent = "Login as existing user";
  existingButton.id = "existing";
  document.body.appendChild(existingButton);

  // Event listener for the "Login as existing user" button
  existingButton.addEventListener("click", () => {
    alert("Logged in as " + savedUsername);
  });
}

// Event listener for the form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  // Save username and password in local storage if "Remember me" is checked
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Display "Logged in" alert
  alert("Logged in as " + username);
});
