// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Add the 'visible' class when the section is in view
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once the animation is done, we can stop observing
            observer.unobserve(entry.target);
        }
    });
}, {
    // Start the animation when the section is 20% visible
    threshold: 0.2,
    // Add a small margin to start the animation slightly before the section comes into view
    rootMargin: '0px 0px -50px 0px'
});

// Observe all content sections
document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
});

// Back to Top Button functionality
const backToTopButton = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 