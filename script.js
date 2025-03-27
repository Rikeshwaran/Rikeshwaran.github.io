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