// Navigation & Section Switching
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Smooth section switching
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            // Show target section
            document.getElementById(targetId).classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
        });
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Smooth scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.navbar').style.transform = `translateY(${Math.min(scrolled * 0.5, 20)}px)`;
    });
});
