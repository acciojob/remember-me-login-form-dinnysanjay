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

  if (savedUsername && savedPassword) {
    const existingButton = document.createElement('button');
    existingButton.id = 'existing';
    existingButton.textContent = 'Login as existing user';
    existingButton.addEventListener('click', function() {
      alert('Logged in as ' + savedUsername);
    });
    form.appendChild(existingButton);
  }
});
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Replace with your app's URL
  });

  it('Checking form', () => {
    // Check if the form elements are present
    cy.get('input#username').should('exist');
    cy.get('input#password').should('exist');
    cy.get('input#checkbox').should('exist');
    cy.get('label[for="username"]').should('exist').and('have.text', 'Username');
    cy.get('label[for="password"]').should('exist').and('have.text', 'Password');
    cy.get('label[for="checkbox"]').should('exist').and('have.text', 'Remember me');
    cy.get('input#submit').should('exist');
  });

  it('User Authentication Tests', () => {
    // Log in with valid credentials
    cy.get('input#username').type('your_username');
    cy.get('input#password').type('your_password');
    cy.get('input#checkbox').check();
    cy.get('input#submit').click();

    // Assert that the 'Login as existing user' button is displayed after login
    cy.get('button#existing').should('exist').and('have.text', 'Login as existing user');
  });
});

