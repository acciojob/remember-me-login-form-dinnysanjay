//your JS code here. If required.
// Check if there are saved details in local storage
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('checkbox');

  // Function to check for saved details and append button
  function checkForSavedDetails() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const existingButton = document.getElementById('existing');
    if (savedUsername && savedPassword) {
      rememberCheckbox.checked = true;
      if (!existingButton) {
        const newButton = document.createElement('button');
        newButton.id = 'existing';
        newButton.textContent = 'Login as existing user';
        newButton.addEventListener('click', function() {
          alert('Logged in as ' + savedUsername);
        });
        form.appendChild(newButton);
      }
    } else {
      rememberCheckbox.checked = false;
      if (existingButton) {
        form.removeChild(existingButton);
      }
    }
  }

  // Check for saved details when page loads
  checkForSavedDetails();

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (rememberCheckbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
    alert('Logged in as ' + username);

    // Check for saved details after form is submitted
    setTimeout(checkForSavedDetails, 0);
  });
});