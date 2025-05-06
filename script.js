document.addEventListener("DOMContentLoaded", function() {
  // Scroll reveal animation
  const sections = document.querySelectorAll("section");
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  }
  
  // Initialize sections as hidden
  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });
  
  // Check on load
  checkScroll();
  
  // Check on scroll
  window.addEventListener("scroll", checkScroll);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          const toggler = document.querySelector('.navbar-toggler');
          toggler.click();
        }
        
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
});

// Certificate Modal Functions
function showCertificate(imageSrc, text, link) {
  const modal = document.getElementById('certificateModal');
  const img = document.getElementById('certificateImage');
  const textEl = document.getElementById('certificateText');
  const linkEl = document.getElementById('certificateLink');
  
  img.src = imageSrc;
  textEl.textContent = text;
  
  if (link) {
    linkEl.href = link;
    linkEl.style.display = "inline-block";
  } else {
    linkEl.style.display = "none";
  }
  
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById('certificateModal').style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('certificateModal');
  if (event.target == modal) {
    closeModal();
  }
}; 
// Particle System
class ParticleSystem {
  constructor(container) {
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 100;
    
    // Colors for particles
    this.colors = [
      (alpha) => `rgba(0, 0, 255, ${alpha})`,   
      (alpha) => `rgba(255, 0, 0, ${alpha})`,   
      (alpha) => `rgba(0, 255, 0, ${alpha})`,
      (alpha) => `rgb(255, 165, 0, ${alpha})`,
      (alpha) => `rgba(255, 255, 255, ${alpha})`, 
    ];

    // Setup
    this.container.appendChild(this.canvas);
    this.canvas.className = 'particles-canvas';
    this.resize();
    this.init();
    
    // Event listeners
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
    this.particles = [];
    this.init();
  }

  init() {
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 1 + 3,
        speed: Math.random() * 0.5 + 0.5,
        angle: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.5 + 0.2,
        colorFunc: this.colors[Math.floor(Math.random() * this.colors.length)] // Assign random color function
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      particle.x += Math.cos(particle.angle) * particle.speed;
      particle.y += Math.sin(particle.angle) * particle.speed;

      // Boundary check
      if (particle.x > this.canvas.width + 5) particle.x = -5;
      if (particle.x < -5) particle.x = this.canvas.width + 5;
      if (particle.y > this.canvas.height + 5) particle.y = -5;
      if (particle.y < -5) particle.y = this.canvas.height + 5;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

      // Use the particle's own color function
      this.ctx.fillStyle = particle.colorFunc(particle.alpha);
      
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize automatically on any element with class 'particles'
document.querySelectorAll('.particles').forEach(container => {
  new ParticleSystem(container);
});
const cursorDot = document.getElementById("cursorDot");
  const cursorRing = document.getElementById("cursorRing");

  document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    cursorDot.style.top = y + "px";
    cursorDot.style.left = x + "px";
    cursorRing.style.top = y + "px";
    cursorRing.style.left = x + "px";
  });