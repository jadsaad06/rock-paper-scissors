function getComputerChoice() {
    let randChoice = Math.random();
    let compChoice = "";

    if (randChoice < 0.33) {
        compChoice = "rock";
    } else if (randChoice < 0.66) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }

    return compChoice;
}


function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");

    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            alert("You lose! Paper beats Rock");
            computerScore++;
        }else if(computerChoice == "scissors"){
            alert("You win! Rock beats Scissors");
            humanScore++;
        }else{
            alert("Tie! Computer chose Rock as well!");
        }
    }else if (humanChoice == "paper"){
        if(computerChoice == "scissors"){
            alert("You lose! Scissors beats Paper");
            computerScore++;
        }else if(computerChoice == "rock"){
            alert("You win! Paper beats Rock");
            humanScore++;
        }else{
            alert("Tie! Computer chose Paper as well!");
        }
    }else{
        if(computerChoice == "rock"){
            alert("You lose! Rock beats Scissors");
            computerScore++;
        }else if(computerChoice == "paper"){
            alert("You win! Scissors beats Paper");
            humanScore++;
        }else{
            alert("Tie! Computer chose Scissors as well!");
        }
    }

    alert(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)
}



for(let i = 0; i < 5; i++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

alert("Thanks for Playing!");