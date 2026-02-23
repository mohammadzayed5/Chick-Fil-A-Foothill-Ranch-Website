// =============================================
//  CFA FOOTHILL RANCH — MAIN JS
// =============================================

// ---------- Sticky Nav on Scroll ----------
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ---------- Mobile Hamburger Menu ----------
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Close mobile nav when a link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});

// ---------- Smooth Scroll for all anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.getElementById('site-header').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---------- Scroll Reveal Animations ----------
const revealElements = document.querySelectorAll(
  '.section-label, h2, .about-text p, .testimonial-card, .benefit-item, .job-card, .story-text p, .visit-detail'
);

// Add reveal class to these elements
revealElements.forEach(el => {
  el.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger the animation slightly for sibling elements
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * (entry.target.dataset.delay || 0));
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

// Add staggered delay for grid children
document.querySelectorAll('.testimonials-grid, .benefits-grid, .jobs-grid').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((child, i) => {
    child.dataset.delay = i;
  });
});

revealElements.forEach(el => revealObserver.observe(el));
