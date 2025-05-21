// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close menu on mobile after click
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.textContent = '☰';
    }
  });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});