const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const restultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoices) {
    const computerChoices = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if (playerChoices === computerChoices) {
        result = "It's a tie!";
    }
    else {
        switch (playerChoices) {
            case 'rock':
                result = (computerChoices === 'scissors') ? "You Win!" : "You lost!";
                break;
            case 'paper':
                result = (computerChoices === 'rock') ? "You Win!" : "You lost!";
                break;
            case 'scissors':
                result = (computerChoices === 'paper') ? "You Win!" : "You lost!";
                break;
        }

    }
    playerDisplay.textContent = `Player: ${playerChoices}.`
    computerDisplay.textContent = `Computer: ${computerChoices}.`

    restultDisplay.textContent = result;
    restultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case 'You Win!':
            playerScore++;
            restultDisplay.classList.add("greenText");
            playerScoreDisplay.textContent = playerScore;
            break;
        case 'You lost!':
            computerScore++;
            restultDisplay.classList.add("redText");
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}


