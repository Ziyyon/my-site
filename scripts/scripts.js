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

//     // Smooth scrolling navigation
//     document.querySelectorAll('nav li').forEach(navItem => {
//         navItem.addEventListener('click', function() {
//             const sectionId = this.getAttribute('data-section');
//             const section = document.getElementById(sectionId);
//             section.scrollIntoView({
//                 behavior: 'smooth'
//             });
//             // Close navigation menu on smaller screens
//             if (window.innerWidth <= 768) {
//                 navUl.classList.remove('active');
//             }
//         });
//     });
// });
