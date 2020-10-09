let age = 0;
let lastText = "";
const rock = 0;
const paper = 1;
const scissors = 2;

const rpsAgeName = [
    'basic', 
    'elemental', 
    'war'
    ];
const rpsAge = [
    ['rock', 'paper', 'scissors'],
    ['water', 'fire', 'earth'],
    ['cavalry', 'artillery', 'infantry'],
    ];


function computerPlay () {
    return Math.floor(Math.random() * 3);
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        playerTie(playerSelection);
    if(playerSelection == rock) {
        if(computerSelection == scissors) {
            playerWin(playerSelection, computerSelection);
        } else if(computerSelection == paper) {
            playerLose(playerSelection, computerSelection);
        }
    } else if(playerSelection == paper) {
        if(computerSelection == rock) {
            playerWin(playerSelection, computerSelection);
        } else if(computerSelection == scissors) {
            playerLose(playerSelection, computerSelection);
        }
    } else if(playerSelection == scissors) {
        if(computerSelection == paper) {
            playerWin(playerSelection, computerSelection);
        } else if(computerSelection == rock) {
            playerLose(playerSelection, computerSelection);
        }
    }
}

function playerWin(playerSelection, computerSelection) {
    lastText = "You win! " + choiceToString(playerSelection) + " beats " + choiceToString(computerSelection);
    if(age < rpsAge.length) {
        age++; 
    } else {
        lastText+= "\nYou won the whole thing. No more ages ):";
    }
}

function playerLose(playerSelection, computerSelection) {
    lastText = "You lose! " + choiceToString(computerSelection) + " beats " + choiceToString(playerSelection);
    age--;
    if (age < 0)
        age = 0;
}

function playerTie(playerSelection) {
    lastText = "You tie! You both picked " + choiceToString(playerSelection);
}

function choiceToString(choice) {
    return rpsAge[age][choice];
}

function updateButtons() {
    buttons.forEach((button) => {
        button.textContent = choiceToString(button.id);
    });
}

let description = document.getElementById('description');
const buttons = document.querySelectorAll('.choiceButton');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
        description.textContent = lastText + ". You're in the " + rpsAgeName[age] + " age.";
        updateButtons();
    });
});
