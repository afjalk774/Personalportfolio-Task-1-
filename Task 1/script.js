// Typing Animation
const texts = ["Web Developer", "Programmer", "Tech Enthusiast"];
let i = 0, j = 0, isDeleting = false;
function type() {
  const typingText = document.querySelector('.typing-text');
  if (!typingText) return;
  let current = texts[i % texts.length];
  if (!isDeleting) {
    typingText.textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 900);
    } else setTimeout(type, 120);
  } else {
    typingText.textContent = current.substring(0, --j);
    if (j === 0) {
      isDeleting = false;
      i++;
      setTimeout(type, 600);
    } else setTimeout(type, 60);
  }
}
type();

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};

// Animate Skill Bars on Scroll
function animateSkills() {
  document.querySelectorAll('.fill').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute('data-width');
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Modal for Project Details
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
document.querySelectorAll('.project-card').forEach(card => {
  card.onclick = () => {
    modalTitle.textContent = card.getAttribute('data-title');
    modalDescription.textContent = card.getAttribute('data-description');
    modal.style.display = 'flex';
  };
});
document.querySelector('.close').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// Contact Form Validation (Simple)
document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Thank you! I'll get back to you soon.";
  this.reset();
};

// Scroll-to-Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
};
scrollTopBtn.onclick = () => window.scrollTo({top:0, behavior:'smooth'});

// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  };
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.onclick = function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
    });
  };
});

// Testimonials Slider
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showTestimonial(idx) {
  testimonials.forEach((t, i) => t.classList.toggle('active', i === idx));
}
document.getElementById('prevTestimonial').onclick = () => {
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
};
document.getElementById('nextTestimonial').onclick = () => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
};
showTestimonial(testimonialIndex);