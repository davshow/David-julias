// Time-based Greeting
function updateGreeting() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning! ☀️' : 
                   hour < 18 ? 'Good afternoon! 🌤️' : 'Good evening! 🌙';
  document.getElementById('greeting').textContent = greeting;
}

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
  updateGreeting();
  
  const themeToggle = document.createElement('button');
  themeToggle.textContent = 'Toggle Dark Mode';
  themeToggle.id = 'theme-toggle';
  document.querySelector('header').appendChild(themeToggle);
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});

// Form Validation (Contact Page)
if (document.getElementById('contact-form')) {
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please enter a valid email!');
      return;
    }
    alert('Form submitted successfully!');
  });
}

// Project Details Toggle (Projects Page)
if (document.querySelector('.details-btn')) {
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Details button clicked!');
    });
  });
}