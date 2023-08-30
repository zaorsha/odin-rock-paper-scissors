function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}

function playerSelection() {
     return prompt("Your move!");
}

let computerChoice = getComputerChoice();
let playerChoice = playerSelection().toLowerCase();

let result;

if (computerChoice == playerChoice) {
    result = "Draw! Try again";
} else if (computerChoice == "rock" || playerChoice == "paper") {
    result = "Player wins!";
} else if (computerChoice == "rock" || playerChoice == "scissors") {
    result = "Computer wins!";
} else if (computerChoice == "paper" || playerChoice == "rock") {
    result = "Computer wins!";
} else if (computerChoice == "paper" || playerChoice == "scissors") {
    result = "Player wins!";
} else if (computerChoice == "scissors" || playerChoice == "rock") {
    result = "Player wins!";
} else if (computerChoice == "scissors" || playerChoice == "paper") {
    result = "Computer wins!";
} else {
    result = "Something's not right...";
}

console.log(`Computer chooses ${computerChoice}...`);
console.log(result);