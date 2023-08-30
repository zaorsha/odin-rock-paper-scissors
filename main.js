function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}

function playerSelection() {
     return prompt("Your move!");
}

function findWinner(pScore, cScore) {
    if (pScore > cScore) {
        return "You win the game!";
    } else if (cScore > pScore) {
        return "You got beat by a computer";
    } else {
        return "It ends in a draw...";
    }
}

let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
let result;

function game() {
    for (let i = 0; i <= 4; i++) {
        computerChoice = getComputerChoice();
        playerChoice = playerSelection().toLowerCase();

        switch (true) {
            case computerChoice == playerChoice:
                result = "Draw! Try again.";
                break;
            case computerChoice == "rock" && playerChoice == "paper":
            case computerChoice == "paper" && playerChoice == "scissors":
            case computerChoice == "scissors" && playerChoice == "rock":
                result = "Player wins!";
                playerScore += 1;
                break;
            case computerChoice == "rock" && playerChoice == "scissors":
            case computerChoice == "paper" && playerChoice == "rock":
            case computerChoice == "scissors" && playerChoice == "paper":
                result = "Computer wins!";
                computerScore += 1;
                break;
            default:
                result = "Something's not right...";
        }

        console.log(`Computer chooses ${computerChoice}...`);
        console.log(result);
    }
}

game()
console.log(`The final score is... Player: ${playerScore} | Computer: ${computerScore}`);
console.log(findWinner(playerScore,computerScore));