//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('checkbox');

  // Check if there are saved credentials
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  if (savedUsername && savedPassword) {
    usernameInput.value = savedUsername;
    passwordInput.value = savedPassword;
    rememberCheckbox.checked = true;
  }

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
  });

  const existingButton = document.getElementById('existing');
  if (savedUsername && savedPassword) {
    existingButton.style.display = 'block';
  }

  existingButton.addEventListener('click', function() {
    alert('Logged in as ' + savedUsername);
  });
});
