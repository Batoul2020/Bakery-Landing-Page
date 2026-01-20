// 1. Mobile Menu Toggle Interaction
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// 2. Smooth Scroll Interaction
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close menu on mobile
        navLinks.classList.remove('active');
        document.querySelector('.menu-toggle i').classList.add('fa-bars');
        document.querySelector('.menu-toggle i').classList.remove('fa-times');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// 3. Form Validation Interaction
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = "Processing...";
    btn.disabled = true;

    // Simulate sending delay
    setTimeout(() => {
        alert("Your order/message has been received! We'll contact you soon.");
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1800);
});