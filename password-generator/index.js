const charset =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
const copyButton = document.querySelector('.copy-btn');
const copyText = document.querySelector('.copy-text');
const passwordText = document.querySelector('.password');
const slider = document.querySelector('.slider');
const charLength = document.querySelector('.length-value');
const generateButton = document.querySelector('.generate-btn');

function copyPassword() {
  copyText.textContent = 'COPIED';
  navigator.clipboard.writeText(passwordText.textContent);
}

function generatePassword() {
  const length = parseInt(slider.value);
  let generatedPassword = '';

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * charset.length);
    generatedPassword += charset[randomNumber];
  }

  passwordText.textContent = generatedPassword;
}

slider.oninput = function () {
  charLength.textContent = this.value;

  // Update the slider's background
  const value = ((this.value - this.min) / (this.max - this.min)) * 100; // Calculate percentage
  this.style.background = `linear-gradient(to right, #a4ffaf ${value}%, #18171f ${value}%)`;
};

copyButton.addEventListener('click', copyPassword);
generateButton.addEventListener('click', generatePassword);
