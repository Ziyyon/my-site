const menuIcon = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');
const aboutLink = document.getElementById('about');
const homeLink = document.getElementById('home');
const projectsLink = document.getElementById('projects');
const contactsLink = document.getElementById('contacts');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navUl.classList.remove('active');
    }
});

aboutLink.addEventListener('click', () => {
window.location.href = 'about.html';
});

homeLink.addEventListener('click', () => {
window.location.href = 'index.html';
});

projectsLink.addEventListener('click', () => {
window.location.href = 'projects.html';
});

contactsLink.addEventListener('click', () => {
window.location.href = 'contacts.html';
});

document.getElementById('copyEmailBtn').addEventListener('click', function() {
    var emailAddress = document.getElementById('hiddenEmailAddress').value;

    var tempInput = document.createElement('input');
    tempInput.value = emailAddress;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    alert('Email copied: ' + emailAddress);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    alert('Message sent!');
});