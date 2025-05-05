// Password generator functionality will be implemented later
let copyButton = document.querySelector('.copy-btn');
let copyText = document.querySelector('.copy-text');
let passwordText = document.querySelector('.password');

function copyPassword() {
  copyText.textContent = 'COPIED';
  navigator.clipboard.writeText(passwordText.textContent);
}

copyButton.addEventListener('click', copyPassword);
