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

//let playerSelection = parseInt(window.prompt("Enter a number 0, 1, or 2."));
let playerSelection = 0;
let computerSelection;
while(playerSelection !== '-1') {
    playerSelection = prompt(lastText + "\nYou're in the " + rpsAgeName[age] + " age.\n" + choiceToString(0) + "(0), " + choiceToString(1) + "(1), or " + choiceToString(2) +"(2).");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}