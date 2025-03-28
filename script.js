document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSections() {
    console.log("Scrolling..."); // Check if function runs
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;

      if (sectionTop < triggerPoint) {
        section.classList.add("show");
        console.log("Revealed:", section.id);
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();
});


document.getElementById("contactform").addEventListener("submit", function(event) {
  alert("Your message has been sent successfully!");
});

function showCertificate(imageSrc, text, link) {
  document.getElementById('certificateImage').src = imageSrc;
  document.getElementById('certificateText').innerText = text;
  if (link) {
    document.getElementById('certificateLink').href = link;
    document.getElementById('certificateLink').style.display = "block";
  } else {
    document.getElementById('certificateLink').style.display = "none";
  }
  document.getElementById('certificateModal').style.display = "block";
}

function closeModal() {
  document.getElementById('certificateModal').style.display = "none";
}


window.onclick = function (event) {
  let modal = document.getElementById('certificateModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
};