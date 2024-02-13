// document.addEventListener("DOMContentLoaded", function() {
//     const menuIcon = document.getElementById('hamburger');
//     const navUl = document.querySelector('nav ul');

//     menuIcon.addEventListener('click', () => {
//         navUl.classList.toggle('active');
//     });

//     // Hide navigation menu items when hamburger menu is clicked
//     navUl.addEventListener('click', () => {
//         if (window.innerWidth <= 768) {
//             navUl.classList.remove('active');
//         }
//     });

//     window.addEventListener('resize', () => {
//         if (window.innerWidth > 768) {
//             navUl.classList.remove('active');
//             // Ensure navigation menu items are shown on larger screens
//             document.querySelectorAll('nav li').forEach(navItem => {
//                 navItem.classList.remove('nav-hidden');
//             });
//         } else {
//             // Hide navigation menu items on smaller screens if hamburger menu is not active
//             if (!navUl.classList.contains('active')) {
//                 document.querySelectorAll('nav li').forEach(navItem => {
//                     navItem.classList.add('nav-hidden');
//                 });
//             }
//         }
//     });

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
