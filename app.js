let computerWins = 0;
let playerWins = 0;


function computerPlay(){
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
    switch(randomChoice){
        case 2:
            computerChoice  = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
        default:
            computerChoice = "Rock";         
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    let roundWinnerMessage;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        roundWinnerMessage = `Tie game! You both play ${playerSelection}`;
    } else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            roundWinnerMessage = `Computer lose! ${playerSelection} beats ${computerSelection}`;
            playerWins += 1;
        } else {
            roundWinnerMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerWins += 1;
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "paper"){
            roundWinnerMessage = `Computer lose! ${playerSelection} beats ${computerSelection}`;
            playerWins += 1;
        } else {
            roundWinnerMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerWins += 1;
        }    
    } else if(playerSelection === "rock"){
        if(computerSelection === "scissors"){
            roundWinnerMessage = `Computer lose! ${playerSelection} beats ${computerSelection}`;
            playerWins += 1;
        } else {
            roundWinnerMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerWins += 1;
        }
        
    }
    return roundWinnerMessage;

}



function game(){
    let round = 0;
    while(round < 5){
        let playerChoice = prompt("choose a hand");
        let computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);
        round++;
    }
    if(computerWins > playerWins){
        return "computer wins!";
        
    } else {
        return "Player wins!";
    }
}

console.log(game() );
