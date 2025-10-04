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

// Open Form
document.getElementById('openForm').onclick = function () {
  document.getElementById('popupForm').style.display = 'flex'
}

// Close Form
document.getElementById('closeForm').onclick = function () {
  document.getElementById('popupForm').style.display = 'none'
}

// Handle Submit
document.getElementById('whatsappForm').onsubmit = function (e) {
  e.preventDefault()
  let name = document.getElementById('name').value
  let location = document.getElementById('location').value
  let message = document.getElementById('message').value

  // Target WhatsApp Number (change this!)
  let phoneNumber = '919844361528' // Example: 91 = India code

  let finalMessage = `Hello, my name is ${name} from ${location}. ${message}`
  let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    finalMessage
  )}`

  // Open WhatsApp
  window.open(url, '_blank')
}
