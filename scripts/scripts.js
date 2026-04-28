const menuIcon = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navUl.classList.remove('active');
    }
});

// CONTACT FORM (AJAX - stay on page)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                status.innerHTML = "✅ Message sent successfully!";
                form.reset();
            } else {
                status.innerHTML = "❌ Something went wrong. Please try again.";
            }
        })
        .catch(() => {
            status.innerHTML = "❌ Network error. Please try again.";
        });
    });
}
