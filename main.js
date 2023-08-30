function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}

function playerSelection() {
     return prompt("Your move!");
}

console.log(getComputerChoice());