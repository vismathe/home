// Burger menu toggle
const burgerBtn = document.getElementById('burgerBtn')
const closeBtn = document.getElementById('closeBtn')
const sideMenu = document.getElementById('sideMenu')
burgerBtn.addEventListener('click', () => {
  sideMenu.classList.add('open')
})

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open')
})

// Carousel logic
const carouselInner = document.getElementById('carouselInner')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
let currentIndex = 0

function updateCarousel () {
  const width = carouselInner.clientWidth
  carouselInner.style.transform = `translateX(-${currentIndex * width}px)`
}
nextBtn.addEventListener('click', () => {
  if (currentIndex < carouselInner.children.length - 1) {
    currentIndex++
  } else {
    currentIndex = 0
  }
  updateCarousel()
})
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
  } else {
    currentIndex = carouselInner.children.length - 1
  }
  updateCarousel()
})

// Auto-play (optional)
setInterval(() => {
  nextBtn.click()
}, 5000)

// On window resize, re-update (so transform widths recalc)
window.addEventListener('resize', updateCarousel)


// main intro video play pause 

const video = document.querySelector('.intro-vid');
const btn = document.querySelector('.video-btn');

btn.addEventListener('click', () => {
  if(video.paused) {
    video.play();
    btn.style.background = 'rgba(255, 255, 255, 0.7)'
  } else {
    video.pause();
    btn.style.background = 'rgba(245, 76, 76, 0.7)'
  }
});



// Open Form
document.getElementById('openForm').onclick = function () {
  document.querySelector('.popup').style.display = 'block';
  document.getElementById('popupForm').style.display = 'flex';
};

// Close Form
document.getElementById('closeForm').onclick = function () {
  document.querySelector('.popup').style.display = 'none';
  document.getElementById('popupForm').style.display = 'none';
};

// Preserve form data using localStorage
const form = document.getElementById('whatsappForm');

// Load saved data
window.addEventListener('load', () => {
  ['name', 'contact', 'location', 'message', 'bananaQty', 'coconutQty', 'copraQty'].forEach(id => {
    if (localStorage.getItem(id)) document.getElementById(id).value = localStorage.getItem(id);
  });
  ['bananaSelect', 'coconutSelect', 'copraSelect'].forEach(id => {
    document.getElementById(id).checked = localStorage.getItem(id) === 'true';
  });
});

// Save data on input
form.querySelectorAll('input, textarea, select').forEach(el => {
  el.addEventListener('input', () => {
    localStorage.setItem(el.id, el.type === 'checkbox' ? el.checked : el.value);
  });
});

// Handle Submit
form.onsubmit = function (e) {
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let contact = document.getElementById('contact').value.trim();
  let location = document.getElementById('location').value.trim();
  let message = document.getElementById('message').value.trim();

  // 🛒 Collect selected products
  let products = [];

  if (document.getElementById('bananaSelect').checked) {
    let qty = document.getElementById('bananaQty').value || 0;
    products.push(`🍌 *Pooja Banana (Unripened)* — ₹60/kg × ${qty} kg`);
  }

  if (document.getElementById('coconutSelect').checked) {
    let qty = document.getElementById('coconutQty').value || 0;
    products.push(`🥥 *Peeled Brown Matured Coconut* — ₹50/piece × ${qty} pcs`);
  }

  if (document.getElementById('copraSelect').checked) {
    let qty = document.getElementById('copraQty').value || 0;
    products.push(`🌰 *Copra* — ₹550/kg × ${qty} kg`);
  }

  if (products.length === 0) {
    alert('Please select at least one product before submitting.');
    return;
  }

  // 🧾 Create order summary
  let orderSummary = products.join('%0A');

  // 📞 Business WhatsApp Number
  let phoneNumber = '919844361528'; // Change this to your number

  // 🧩 Final WhatsApp message
  let finalMessage =
    `Hello! 👋%0A` +
    `My name is *${name}* (${contact}).%0A%0A` +
    `🛒 *Order Summary*:%0A${orderSummary}%0A%0A` +
    `📍 *Pickup Location:* ${location}%0A` +
    (message ? `🗒️ *Additional Note:* ${message}%0A%0A` : ``) +
    `Thank you for choosing *Vismathe Farm Fresh*! 🌿`;

  // 🚀 Open WhatsApp chat
  let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${finalMessage}`;
  window.open(url, '_blank');
};