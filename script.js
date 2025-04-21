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