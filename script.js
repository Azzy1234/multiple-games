// Coin Flip Section
document.getElementById("flipButton").addEventListener("click", function() {
    const resultElement = document.getElementById("coinResult");
    const flipCount = parseInt(document.getElementById("flipCount").value); // Get number of flips

    let headsCount = 0;
    let tailsCount = 0;

    // Perform the flips
    for (let i = 0; i < flipCount; i++) {
        const flipResult = Math.random() < 0.5 ? "Heads" : "Tails";
        
        if (flipResult === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }
    }

    // Display result
    resultElement.textContent = `Heads: ${headsCount}, Tails: ${tailsCount}`;
});

// Dice Roll Section
document.getElementById("diceButton").addEventListener("click", function() {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
    document.getElementById("diceResult").textContent = `You rolled a ${diceRoll}`;
});

// Rock, Paper, Scissors Section
const choices = ["Rock", "Paper", "Scissors"];

function playRPS(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Random computer choice
    let result = '';

    if (userChoice === computerChoice) {
        result = `It's a tie! You both chose ${userChoice}`;
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}`;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}`;
    }

    document.getElementById("rpsResult").textContent = result;
}

document.getElementById("rockButton").addEventListener("click", function() {
    playRPS("Rock");
});
document.getElementById("paperButton").addEventListener("click", function() {
    playRPS("Paper");
});
document.getElementById("scissorsButton").addEventListener("click", function() {
    playRPS("Scissors");
});
