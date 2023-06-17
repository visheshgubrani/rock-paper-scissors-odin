const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}



function displayMessage(message) {
    return document.querySelector('.message').textContent = message;
}

function updateScore() {
    document.querySelector('.p-count').textContent = playerScore;
    document.querySelector('.c-count').textContent = computerScore;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        displayMessage("It's a Tie");
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'scissors' && computerChoice === 'paper') || 
    (playerChoice === 'paper' && computerChoice === 'rock')) {
        displayMessage('You Win');
        playerScore++;
    } else {
        displayMessage('You Lose');
        computerScore++;
    }
    updateScore()

}

document.querySelector('.rock').addEventListener('click', function() {
    const playerChoice = 'rock';
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    playRound(playerChoice, computerChoice);
});

document.querySelector('.paper').addEventListener('click', function() {
    const playerChoice = 'paper';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

document.querySelector('.scissors').addEventListener('click', function() {
    const playerChoice = 'scissors';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});