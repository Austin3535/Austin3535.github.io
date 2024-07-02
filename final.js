let min = 0;
let max = 9999999999;

while (true) {
  let guess = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);
  console.log(`                                      Is your phone number ${guess}?`);
  console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);

  let correctDigits = parseInt(prompt("                                      How many digits are in the correct positions?"));

  if (correctDigits === 10) {
    console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);
    console.log(`                                      I guessed it! Your phone number is ${guess}`);
    console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);
    break;
  } else {
    let newMin = min;
    let newMax = max;

    for (let i = 0; i < 10; i++) {
      let digit = Math.floor(guess / Math.pow(10, 9 - i)) % 10;
      if (correctDigits > 0) {
        newMin = Math.max(newMin, guess - (guess % Math.pow(10, 10 - i)) + digit * Math.pow(10, 9 - i));
        newMax = Math.min(newMax, guess - (guess % Math.pow(10, 10 - i)) + digit * Math.pow(10, 9 - i) + Math.pow(10, 10 - i) - 1);
        correctDigits--;
      } else {
        newMin = Math.max(newMin, guess - (guess % Math.pow(10, 10 - i)) + 0 * Math.pow(10, 9 - i));
        newMax = Math.min(newMax, guess - (guess % Math.pow(10, 10 - i)) + 9 * Math.pow(10, 9 - i));
      }
    }

    min = newMin;
    max = newMax;
  }
}