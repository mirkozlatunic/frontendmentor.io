const charset = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
};

const copyButton = document.querySelector('.copy-btn');
const copyText = document.querySelector('.copy-text');
const passwordText = document.querySelector('.password');
const slider = document.querySelector('.slider');
const charLength = document.querySelector('.length-value');
const generateButton = document.querySelector('.generate-btn');
const strengthBars = document.querySelectorAll('.strength-bars .bar');
const strengthLabel = document.querySelector('.strength-label');

// Get checkbox elements
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

function copyPassword() {
  copyText.textContent = 'COPIED';
  navigator.clipboard.writeText(passwordText.textContent);

  setTimeout(() => {
    copyText.textContent = '';
  }, 2000);
}

function calculateStrength(password) {
  let score = 0;

  // Length score
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;

  // Character type score
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return Math.min(score, 4); // Cap at 4 for our 4 bars
}

function updateStrengthMeter(strength) {
  // Color and label mapping
  const colors = ['#F64A4A', '#FB7C58', '#F8CD65', '#A4FFAF'];
  const labels = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];
  let color = '#18171F';
  let label = '';

  if (strength === 0) {
    label = '';
  } else {
    color = colors[strength - 1];
    label = labels[strength - 1];
  }

  strengthBars.forEach((bar, index) => {
    if (index < strength) {
      bar.style.backgroundColor = color;
      bar.style.border = 'none';
    } else {
      bar.style.backgroundColor = 'transparent';
      bar.style.border = '1px solid #E6E5EA';
    }
  });
  strengthLabel.textContent = label;
  strengthLabel.style.color = color;
}

function generatePassword() {
  const length = parseInt(slider.value);
  let selectedChars = '';
  let generatedPassword = '';

  // Build character set based on selected options
  if (uppercaseCheckbox.checked) selectedChars += charset.uppercase;
  if (lowercaseCheckbox.checked) selectedChars += charset.lowercase;
  if (numbersCheckbox.checked) selectedChars += charset.numbers;
  if (symbolsCheckbox.checked) selectedChars += charset.symbols;

  // If no options are selected, use all characters
  if (selectedChars === '') {
    selectedChars = Object.values(charset).join('');
  }

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * selectedChars.length);
    generatedPassword += selectedChars[randomNumber];
  }

  passwordText.textContent = generatedPassword;

  // Update strength meter
  const strength = calculateStrength(generatedPassword);
  updateStrengthMeter(strength);
}

slider.oninput = function () {
  charLength.textContent = this.value;
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right, #a4ffaf ${value}%, #18171f ${value}%)`;
};

// Add event listeners for checkboxes
[
  uppercaseCheckbox,
  lowercaseCheckbox,
  numbersCheckbox,
  symbolsCheckbox,
].forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    // Ensure at least one checkbox is checked
    if (
      !uppercaseCheckbox.checked &&
      !lowercaseCheckbox.checked &&
      !numbersCheckbox.checked &&
      !symbolsCheckbox.checked
    ) {
      checkbox.checked = true;
    }
  });
});

copyButton.addEventListener('click', copyPassword);
generateButton.addEventListener('click', generatePassword);
