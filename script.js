 // Burger menu toggle
    const burgerBtn = document.getElementById('burgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sideMenu = document.getElementById('sideMenu');
    burgerBtn.addEventListener('click', () => {
      sideMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', ()=>{
        sideMenu.classList.remove('open');
    })

    // Carousel logic
    const carouselInner = document.getElementById('carouselInner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel() {
      const width = carouselInner.clientWidth;
      carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
    }
    nextBtn.addEventListener('click', () => {
      if (currentIndex < carouselInner.children.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = carouselInner.children.length - 1;
      }
      updateCarousel();
    });

    // Auto-play (optional)
    setInterval(() => {
      nextBtn.click();
    }, 5000);

    // On window resize, re-update (so transform widths recalc)
    window.addEventListener('resize', updateCarousel);