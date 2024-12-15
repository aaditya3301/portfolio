function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

new Typed("#typed", {
    strings: ["Optimizing Performance and SEO", "Building Modern Web Applications", "Responsive and Accessible Websites"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        const menu = document.getElementById('mobile-menu');
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    this.reset();
});
