let playerSelection;

let options = {
    Rock: {
        strongTo: 'Scissors', weakTo: 'Paper'
    },
    Paper: {
        strongTo: 'Rock', weakTo: 'Scissors'
    },
    Scissors: {
        strongTo: 'Paper', weakTo: 'Rock'
    }
}

function addEventListeners () {

    document.querySelector('#run').addEventListener('click', function() {
        game();
    });

    let rockBtn = document.querySelector('#rock');
    let paperBtn = document.querySelector('#paper');
    let scissorBtn = document.querySelector('#scissors');

    rockBtn.addEventListener('click', ()=>{
        playerSelection = "Rock";
        displayResult("You chose rock");
    });

    paperBtn.addEventListener('click', ()=>{
        playerSelection = "Paper";
        displayResult("You chose paper");
    });

    scissorBtn.addEventListener('click', ()=>{
        playerSelection = "Scissors";
        displayResult("You chose scissors");
    });

    console.log("Successfully added event listeners.");
}

function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function parseSelection(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1);
    return playerSelection;
}

function play(playerSelection, computerSelection) {

    if(options[playerSelection].strongTo == computerSelection){
        return 2;
    }

    else if(options[playerSelection].weakTo == computerSelection){
        return 1;
    }

    else {
        return 0;
    }

}



function game() {

    if(playerSelection == undefined) {
        displayResult("No player selection has been made!");
        return;
    }

    console.log("Rock, Paper, Scissors!");

    let computerSelection = getComputerChoice();

    let outcomeToString = ["It's a draw!", "You lose! " + computerSelection + " beats " + playerSelection, "You win! " + playerSelection + " beats " + computerSelection]

    let result = play(playerSelection, computerSelection);
    console.log(outcomeToString[result]);

    displayResult(outcomeToString[result]);

    playerSelection = undefined;
}

function displayResult(word) {
    let screen = document.querySelector('#screen');

    let last = screen.lastChild;

    if(last.innerText != undefined) {
        if(last.innerText == "> " + word) {
            return;
        }
    
        if(last.innerText.substring(2, 11) == "You chose" && word.substring(0,9)=="You chose"){
            last.innerText = "> " + word;
            return;
        }
    }

    let newP = document.createElement('p');
    newP.innerText = "> " + word;
    screen.appendChild(newP);
}

addEventListeners();