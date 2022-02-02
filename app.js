const btns = document.querySelectorAll('.btn');
const playerChoice = document.querySelector(".playerChoice img");
const computerChoice = document.querySelector(".computerChoice img");
const displayResult = document.getElementById('displayResult');
const announceWinner = document.querySelector('.annouceWinner');
const finalWinner = document.getElementById('displayWinner');
const playAgain = document.querySelector('#reloadGame');


let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');


let computerWins = 0;
let playerWins = 0;







btns.forEach(btn => btn.addEventListener("click", function(e){
    let computer = computerPlay();
    playRound(this.id, computer);
    displayImg(this.id, playerChoice);
    displayImg(computer, computerChoice);
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;

    
    
 }));
/* the logic of the game */


function displayImg(choice,player){
    const choicesImages = ["https://nehalhazem.github.io/rockPaperScissors.io/img/rock.png","https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/paper--left.png", "https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/scissors--left.png"];
    if(choice === "Rock"){
        player.src = choicesImages[0];
    }else if(choice === "Paper"){
        player.src = choicesImages[1];
    } else {
        player.src = choicesImages[2];
    }
};

function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomChoice];
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
            roundWinnerMessage = `Computer lose the round! ${playerSelection} beats ${computerSelection}`;
            playerWins += 1;
        } else {
            roundWinnerMessage = `You lose the round! ${computerSelection} beats ${playerSelection}`;
            computerWins += 1;
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "paper"){
            roundWinnerMessage = `Computer lose the round! ${playerSelection} beats ${computerSelection}`;
            playerWins += 1;
        } else {
            roundWinnerMessage = `You lose the round! ${computerSelection} beats ${playerSelection}`;
            computerWins += 1;
        }    
    } else if(playerSelection === "rock"){
        if(computerSelection === "scissors"){
            roundWinnerMessage = `Computer lose the round! ${playerSelection} beats ${computerSelection}`;
            playerWins += 1;
        } else {
            roundWinnerMessage = `You lose the round! ${computerSelection} beats ${playerSelection}`;
            computerWins += 1;
        }
        
    }
    displayResult.textContent = roundWinnerMessage;
    

}



// function game(){
//     let round = 0;
//     while(round < 5){
//         let playerChoice = prompt("choose a hand");
//         let computerChoice = computerPlay();
//         playRound(playerChoice, computerChoice);
//         round++;
//     }
//     if(computerWins > playerWins){
//         return "computer wins!";
        
//     } else {
//         return "Player wins!";
//     }
// }

// console.log(game() );
