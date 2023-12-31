function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}

const buttons = document.querySelectorAll('.button');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const computerChooses = document.querySelector('.computerChooses');
const winnerText = document.querySelector('.winnerText');

const finalScore = document.querySelector('.finalScore');
const theWinner = document.querySelector('.theWinner');

const playerScoreDiv = document.querySelector('.playerScore');
const computerScoreDiv = document.querySelector('.computerScore');

function findWinner(pScore, cScore) {
    if (pScore > cScore) {
        return "You win the game!";
    } else if (cScore > pScore) {
        return "You got beat by a computer";
    } else {
        return "It ends in a draw...";
    }
}

let playerChoice;

// Function to return string for whichever
// button was clicked

let computerChoice;
let computerScore = 0;
let playerScore = 0;
let result;


// Run the game only when a button is clicked
// declare winner if either score == 5

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.innerText.toLowerCase();
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        game();

        if (playerScore == 5 || computerScore == 5) {
            finalScore.innerText = `The final score is... Player: ${playerScore} | Computer: ${computerScore}`;
            theWinner.innerText = findWinner(playerScore,computerScore);
        }
    });
})

function playRound(playerChoice, computerChoice) {

    switch (true) {
        case computerChoice == playerChoice:
            result = "Draw! Try again.";
            break;
        case computerChoice == "rock" && playerChoice == "paper":
        case computerChoice == "paper" && playerChoice == "scissors":
        case computerChoice == "scissors" && playerChoice == "rock":
            result = "Player wins!";
            playerScore += 1;
            playerScoreDiv.innerText = playerScore.toString();
            break;
        case computerChoice == "rock" && playerChoice == "scissors":
        case computerChoice == "paper" && playerChoice == "rock":
        case computerChoice == "scissors" && playerChoice == "paper":
            result = "Computer wins!";
            computerScore += 1;
            computerScoreDiv.innerText = computerScore.toString();
            break;
        default:
            result = "Something's not right...";
    }
    return result;
}

function game() {        

        computerChooses.innerText = `Computer chooses ${computerChoice}...`;
        winnerText.innerText = result;
    }



