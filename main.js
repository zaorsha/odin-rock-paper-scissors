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

switch (true) {
    case computerChoice == playerChoice:
        result = "Draw! Try again.";
        break;
    case computerChoice == "rock" || playerChoice == "paper":
    case computerChoice == "paper" || playerChoice == "scissors":
    case computerChoice == "scissors" || playerChoice == "rock":
        result = "Player wins!";
        break;
    case computerChoice == "rock" || playerChoice == "scissors":
    case computerChoice == "paper" || playerChoice == "rock":
    case computerChoice == "scissors" || playerChoice == "paper":
        result = "Computer wins!";
        break;
    default:
        result = "Something's not right...";
}

console.log(`Computer chooses ${computerChoice}...`);
console.log(result);