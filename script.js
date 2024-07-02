let phoneNumber = [];
let currentGuess = [];

// Initialize the current guess to a random phone number
for (let i = 0; i < 10; i++) {
    currentGuess.push(Math.floor(Math.random() * 10));
}

// Display the initial guess
document.getElementById("phone-number").innerText = currentGuess.join("");

// Add event listener to the submit button
document.getElementById("submit").addEventListener("click", () => {
    // Get the feedback from the user
    let feedback = document.getElementById("feedback").value.toLowerCase();

    // If the user says the guess is correct, enable the "Correct!" button
    if (feedback === "correct") {
        document.getElementById("correct").disabled = false;
    } else {
        // Otherwise, update the current guess based on the feedback
        if (feedback === "higher") {
            for (let i = 0; i < 10; i++) {
                currentGuess[i] = Math.min(currentGuess[i] + 1, 9);
            }
        } else if (feedback === "lower") {
            for (let i = 0; i < 10; i++) {
                currentGuess[i] = Math.max(currentGuess[i] - 1, 0);
            }
        }

        document.getElementById("phone-number").innerText = currentGuess.join("");
    }
});

// Add event listener to the "Correct!" button
document.getElementById("correct").addEventListener("click", () => {
    document.getElementById("phone-number").innerText = "Yay! I guessed your phone number!";
    document.getElementById("feedback").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("correct").disabled = true;
});