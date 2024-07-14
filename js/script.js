document.addEventListener('DOMContentLoaded', () => {
    // Event listener for "Explore Services" button
    const exploreServicesBtn = document.getElementById('explore-services-btn');
    exploreServicesBtn.addEventListener('click', () => {
        alert('Explore our wide range of services!');
    });

    // Event listener for form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Validate form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Message sent successfully!');
        contactForm.reset(); // Reset form fields
    });

    // Event listener for mobile menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Function to validate email address
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Function to show alert for services
function alertService(service) {
    alert(`Learn more about our ${service} services!`);
}
