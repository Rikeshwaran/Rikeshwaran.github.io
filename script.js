$(window).on('scroll', function () {
    $('section').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
        $(this).addClass('visible');
      }
    });
  });
  
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    $("#formMessage").fadeIn(500).delay(3000).fadeOut(500);
    this.reset();
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
  
  const video = document.getElementById('bgVideo');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const scrollFraction = scrollTop / maxScroll;
    const videoDuration = video.duration;

    if (!isNaN(videoDuration)) {
      video.currentTime = scrollFraction * videoDuration;
    }
  });

  // Optional: Preload video metadata to get duration immediately
  video.addEventListener('loadedmetadata', () => {
    video.currentTime = 0;
  });


  