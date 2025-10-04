const stars = document.querySelectorAll('.star-rating .star');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    highlightStars(star.dataset.value);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating);
  });

  star.addEventListener('click', () => {
    selectedRating = star.dataset.value;
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    if(star.dataset.value <= rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

// Submit Feedback (send via email link)
document.getElementById('submitFeedback').addEventListener('click', () => {
  if(selectedRating == 0) {
    document.querySelector('.feedback-msg').textContent = "Please select a rating before submitting.";
    return;
  }

  const email = "cuprincecu@gmail.com"; // replace with your email
  const subject = encodeURIComponent("Website Feedback Rating");
  const body = encodeURIComponent(`Anonymous rating: ${selectedRating} star(s)`);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

  document.querySelector('.feedback-msg').textContent = "Thank you for your feedback!";
});
