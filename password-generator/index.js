// Password generator functionality will be implemented later
let copyButton = document.querySelector('.copy-btn');
let copyText = document.querySelector('.copy-text');
let passwordText = document.querySelector('.password');
let slider = document.querySelector('.slider');
let charLength = document.querySelector('.length-value');

function copyPassword() {
  copyText.textContent = 'COPIED';
  navigator.clipboard.writeText(passwordText.textContent);
}

slider.oninput = function () {
  charLength.textContent = this.value;

  // Update the slider's background
  const value = ((this.value - this.min) / (this.max - this.min)) * 100; // Calculate percentage
  this.style.background = `linear-gradient(to right, #a4ffaf ${value}%, #18171f ${value}%)`;
};

copyButton.addEventListener('click', copyPassword);
