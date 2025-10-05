  const images = document.querySelectorAll('.event-gallary img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('show');
    });
  });

  // Close lightbox when clicked anywhere
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });