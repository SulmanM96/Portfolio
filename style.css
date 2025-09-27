// Initialize AOS animations
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,      // Animation duration in ms
    easing: "ease-in-out", // Easing style
    once: true,         // Only animate once per element
    mirror: false       // Don't animate on scroll up
  });
});

// Optional: Smooth scroll for internal links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Optional: Fade in header on load
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
      hero.style.opacity = 1;
    }, 100);
  }
});
