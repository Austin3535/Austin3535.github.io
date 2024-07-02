const digitButtons = document.querySelectorAll('.digit-button');
const submitButton = document.getElementById('submit-phone');
let phoneNumber = '';

function generateRandomDigit() {
  return Math.floor(Math.random() * 10);
}

function displayRandomDigit(button) {
  const digit = generateRandomDigit();
  button.textContent = digit;
  button.dataset.digit = digit;
}

digitButtons.forEach((button) => {
  displayRandomDigit(button);
  button.addEventListener('click', () => {
    phoneNumber += button.dataset.digit;
    displayRandomDigit(button);
  });
});

submitButton.addEventListener('click', () => {
  if (phoneNumber.length !== 10) {
    alert('Invalid phone number!');
    return;
  }
  console.log(`Phone number: ${phoneNumber}`);
  // Do something with the phone number, like sending it to a server
});