const button = document.querySelector('.share-button');
const pointer = document.querySelector('.pointer');
const modal = document.querySelector('.modal');

function colorChange() {
  // Toggle active class on button and pointer
  button.classList.toggle('active');
  pointer.classList.toggle('active');

  // Toggle modal visibility
  modal.classList.toggle('show-modal');
}

// Optional: Close modal when clicking outside
document.addEventListener('click', function (event) {
  if (!button.contains(event.target) && !modal.contains(event.target)) {
    // If click is outside both button and modal, remove active states
    button.classList.remove('active');
    pointer.classList.remove('active');
    modal.classList.remove('show-modal');
  }
});
