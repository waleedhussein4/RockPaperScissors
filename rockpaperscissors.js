function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}