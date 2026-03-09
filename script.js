// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close menu when link clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

revealElements.forEach(el => revealObserver.observe(el));

// Skill Bars Animation
const skillItems = document.querySelectorAll('.skill-item');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const val = entry.target.getAttribute('data-value');
      const fill = entry.target.querySelector('.skill-bar-fill');
      if(fill) {
        fill.style.width = val + '%';
      }
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillItems.forEach(item => skillObserver.observe(item));

// Form Submit (Demo)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button');
  const originalText = btn.textContent;
  btn.textContent = "Sending...";
  btn.disabled = true;
  btn.style.opacity = "0.7";

  setTimeout(() => {
    btn.textContent = "Sent Successfully!";
    btn.style.background = "linear-gradient(135deg, #10b981, #3b82f6)";
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
      btn.disabled = false;
      btn.style.opacity = "1";
      form.reset();
    }, 2000);
  }, 1500);
});

