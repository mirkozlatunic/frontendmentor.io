// Get DOM elements
const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const resetButton = document.getElementById('reset');
const tipPerPersonElement = document.getElementById('tip-per-person');
const totalPerPersonElement = document.getElementById('total-per-person');

// State
let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;

// Initialize the calculator
function init() {
  resetButton.disabled = true;
  updateCalculation();
}

// Update calculation
function updateCalculation() {
  if (bill > 0 && tipPercentage >= 0 && numberOfPeople > 0) {
    const tipAmount = (bill * tipPercentage) / 100;
    const totalAmount = bill + tipAmount;
    const tipPerPerson = tipAmount / numberOfPeople;
    const totalPerPerson = totalAmount / numberOfPeople;

    tipPerPersonElement.textContent = tipPerPerson.toFixed(2);
    totalPerPersonElement.textContent = totalPerPerson.toFixed(2);
    resetButton.disabled = false;
  } else {
    tipPerPersonElement.textContent = '0.00';
    totalPerPersonElement.textContent = '0.00';
  }
}

// Handle bill input
billInput.addEventListener('input', (e) => {
  bill = parseFloat(e.target.value) || 0;
  updateCalculation();
});

// Handle tip button clicks
tipButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    tipButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    customTipInput.value = '';
    tipPercentage = parseFloat(button.dataset.tip);
    updateCalculation();
  });
});

// Handle custom tip input
customTipInput.addEventListener('input', (e) => {
  tipButtons.forEach((btn) => btn.classList.remove('active'));
  tipPercentage = parseFloat(e.target.value) || 0;
  updateCalculation();
});

// Handle number of people input
peopleInput.addEventListener('input', (e) => {
  const value = parseInt(e.target.value) || 0;
  const parentElement = peopleInput.parentElement;

  if (value === 0) {
    parentElement.classList.add('error');
  } else {
    parentElement.classList.remove('error');
  }

  numberOfPeople = value;
  updateCalculation();
});

// Handle reset button
resetButton.addEventListener('click', () => {
  bill = 0;
  tipPercentage = 0;
  numberOfPeople = 0;

  billInput.value = '';
  customTipInput.value = '';
  peopleInput.value = '';

  tipButtons.forEach((btn) => btn.classList.remove('active'));
  peopleInput.parentElement.classList.remove('error');

  init();
});

// Initialize the calculator
init();
