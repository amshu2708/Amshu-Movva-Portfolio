// ===============================
// Scroll Progress Bar
// ===============================
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
});


// ===============================
// Particles.js + AOS Initialization
// ===============================
window.addEventListener("load", () => {
  // Particles
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 70 },
        color: { value: ["#ff4da6", "#b57edc"] },
        shape: { type: "circle" },
        opacity: { value: 0.35 },
        size: { value: 3 },
        line_linked: { enable: true, opacity: 0.2 },
        move: { enable: true, speed: 1.2 }
      }
    });
  }

  // AOS Animations
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true
    });
  }
});


// ===============================
// Project Modals
// ===============================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("open");
}


// ===============================
// Resume Modal
// ===============================
function openResume() {
  const modal = document.getElementById("resumeModal");
  if (modal) modal.classList.add("open");
}

function closeResume() {
  const modal = document.getElementById("resumeModal");
  if (modal) modal.classList.remove("open");
}


// ===============================
// Close ANY modal when clicking outside
// ===============================
window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal.open, .resume-modal.open").forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });
});


// ===============================
// Contact Form (Demo / Frontend Only)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }
});
// Fade-in animation on scroll
const skills = document.querySelectorAll(".skill-icon");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

skills.forEach(skill => {
  observer.observe(skill);
});