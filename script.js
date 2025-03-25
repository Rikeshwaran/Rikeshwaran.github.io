$(window).on('scroll', function () {
  $('section').each(function () {
    if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
      $(this).addClass('visible');
    }
  });
});

document.getElementById("contactform").addEventListener("submit", function(event) {
  alert("Your message has been sent successfully!");
});

function showCertificate(imageSrc) {
  document.getElementById('certificateImage').src = imageSrc;
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