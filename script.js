window.addEventListener('scroll', function () {
    const scrollHeight = window.scrollY;
    const parallaxImage = document.getElementById('parallax-image');
    const container = document.getElementById('container');
  
    // Move the image and container up as you scroll down
    parallaxImage.style.transform = `translateY(${scrollHeight * 0.5}px)`;
    container.style.transform = `translate(-50%, -50%) translateY(${scrollHeight * 0.3}px)`;
  });

  