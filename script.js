const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let playerScoreText = document.querySelector('#player-score');
let computerScoreText = document.querySelector('#computer-score');
const roundInfo = document.querySelector('#round-info');
const reset = document.querySelector('#reset');
const resetText = document.querySelector('#reset-text');

let choice;
let playerChoice;

let computerScore = 0;
let playerScore = 0;

rock.addEventListener('click', () => {
    playerChoice = 'rock';
    computerChoice();
    compare();
    console.log(playerScore)
})

paper.addEventListener('click', () => {
    playerChoice = 'paper';
    computerChoice();
    compare();
    console.log(playerScore)
})

scissors.addEventListener('click', () => {
    playerChoice = 'scissors';
    computerChoice();
    compare();
    console.log(playerScore)
})    

reset.addEventListener('click', () => location.reload())


function computerChoice() {
    let choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}

function compare() {

    if ((computerChoice() == 'rock' && playerChoice == 'scissors') ||
        (computerChoice() == 'paper' && playerChoice == 'rock') ||
        (computerChoice() == 'scissors' && playerChoice == 'paper')) {
            roundInfo.innerText = 'Computer Wins This Round';
            computerScore += 1;
            computerScoreText.innerText = computerScore;
        } else if (computerChoice() == playerChoice) {
            roundInfo.innerText = 'Tie';
        } else {
            roundInfo.innerText = 'You Win This Round';
            playerScore += 1;
            playerScoreText.innerText = playerScore;
        }
    if (computerScore == 5 || playerScore == 5) {
        reset.style.display = 'flex'; 
        if (computerScore == 5) {
            resetText.innerText = 'Computer Wins\nRestart Game?';
        } else {
            resetText.innerText = 'You Win\nRestart Game?'
        }
    }
};