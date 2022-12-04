function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

let options = {
    rock: {
        strongTo: 'scissors', weakTo: 'paper'
    },
    paper: {
        strongTo: 'rock', weakTo: 'scissors'
    },
    scissors: {
        strongTo: 'paper', weakTo: 'rock'
    }
}

function play(playerSelection, computerSelection) {

    if(options[playerSelection].strongTo == computerSelection){
        return "You win! " + playerSelection + " beats " + computerSelection;
    }

    else if(options[playerSelection].weakTo == computerSelection){
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }

    else {
        return "It's a draw!"
    }
    
}