const button = document.querySelector('.share-button');
const pointer = document.querySelector('.pointer');

function colorChange() {
  // Toggle active class on button
  button.classList.toggle('active');
  pointer.classList.toggle('active');
}
