function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

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

    console.log("Rock, Paper, Scissors!");

    let score = 0;

    for(let i = 1; i <= 5; i++){
        console.log("ROUND", i);

        let playerSelection = prompt("Rock, paper, or scissors?")
        let computerSelection = getComputerChoice();

        playerSelection = parseSelection(playerSelection)

        let outcomeToString = ["It's a draw!", "You lose! " + computerSelection + " beats " + playerSelection, "You win! " + playerSelection + " beats " + computerSelection]

        let result = play(playerSelection, computerSelection);
        console.log(outcomeToString[result]);

        if(result == 1) {
            if(score > 0) {
                score -= 1;
            }
        }

        if(result == 2) {
            score += 1;
        }
    }

    console.log("GAME OVER!");
    console.log("Score: " + score);

}

game();