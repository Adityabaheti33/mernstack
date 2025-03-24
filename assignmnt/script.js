// Handle registration form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const address = document.getElementById('address').value.trim();
  
        const newUser = { name, email, contact, address };
  
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
  
        form.reset();
        alert("User registered successfully!");
      });
    }
  
    // Display users on view.html
    const usersTable = document.getElementById('usersTable');
    if (usersTable) {
      const tbody = usersTable.querySelector('tbody');
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.contact}</td>
          <td>${user.address}</td>
        `;
        tbody.appendChild(row);
      });
    }
  });
  