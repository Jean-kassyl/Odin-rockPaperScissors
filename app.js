function computerPlay(){
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let computerHand;
    switch(computerChoice){
        case 2:
            computerHand  = "Paper";
            break;
        case 3:
            computerHand = "Scissors";
            break;
        default:
            computerHand = "Rock";         
    }
    return computerHand;
}

computerPlay();