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
        } else {
            roundWinnerMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "paper"){
            roundWinnerMessage = `Computer lose! ${playerSelection} beats ${computerSelection}`;
        } else {
            roundWinnerMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        }    
    } else if(playerSelection === "rock"){
        if(computerSelection === "scissors"){
            roundWinnerMessage = `Computer lose! ${playerSelection} beats ${computerSelection}`;
        } else {
            roundWinnerMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        
    }
    return roundWinnerMessage;

}

const player = "paPEr";
const computer = computerPlay();

console.log(playRound(player,computer), `computer choice: ${computer}, player choice ${player}`);

