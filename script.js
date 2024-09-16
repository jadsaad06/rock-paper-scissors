const humanChoicePic = document.querySelector(".option-UI#playerChoice");
const computerChoicePic = document.querySelector(".option-UI#compChoice");

const changeChoicePic = function(player, choice){
    if(choice == "scissors"){
        player.src = "https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-cute-red-scissors-clipart-png-image_5720189.png";
    }else if(choice == "paper"){
        player.src = "https://spaces-cdn.clipsafari.com/d6xub7hw3shnvf3zp7a0yg32f9xg";
    }else{
        player.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmwUZx2AG6bjbC5VrglrRW6M1EQ-9zX_Mwq34TMcCnKGyTaOYrDHvSm1uc_G4Xs-FBHM&usqp=CAU";
    }
}


const getComputerChoice = function () {
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


const getHumanChoice = function(){
    let choice = prompt("Rock, Paper, or Scissors?");

    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
const scoreboard = querySelector("#scoreboard");
const declareWinner = querySelector("#declare-winner");

const playRound = function (humanChoice, computerChoice){
    changeChoicePic(humanChoicePic, humanChoice);
    changeChoicePic(computerChoicePic, computerChoice);

    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            declareWinner.value ="You lose! Paper beats Rock";
            computerScore++;
        }else if(computerChoice == "scissors"){
            declareWinner.value ="You win! Rock beats Scissors";
            humanScore++;
        }else{
            declareWinner.value ="Tie! Computer chose Rock as well!";
        }
    }else if (humanChoice == "paper"){
        if(computerChoice == "scissors"){
            declareWinner.value ="You lose! Scissors beats Paper";
            computerScore++;
        }else if(computerChoice == "rock"){
            declareWinner.value ="You win! Paper beats Rock";
            humanScore++;
        }else{
            declareWinner.value ="Tie! Computer chose Paper as well!";
        }
    }else{
        if(computerChoice == "rock"){
            declareWinner.value ="You lose! Rock beats Scissors";
            computerScore++;
        }else if(computerChoice == "paper"){
            declareWinner.value ="You win! Scissors beats Paper";
            humanScore++;
        }else{
            declareWinner.value ="Tie! Computer chose Scissors as well!";
        }
    }

    scoreboard.value =`Human Score: ${humanScore}\nComputer Score: ${computerScore}`;
}




// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);

// declareWinner.value ="Thanks for Playing!");