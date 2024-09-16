const humanChoicePic = document.querySelector("#playerChoice");
const computerChoicePic = document.querySelector("#compChoice");

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

let humanScore = 0;
let computerScore = 0;
const scoreboard = document.querySelector("#scoreboard");
const declareWinner = document.querySelector("#declare-winner");

const playRound = function (humanChoice, computerChoice){
    changeChoicePic(humanChoicePic, humanChoice);
    changeChoicePic(computerChoicePic, computerChoice);

    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            declareWinner.textContent = "You lose! Paper beats Rock";
            computerScore++;
        }else if(computerChoice == "scissors"){
            declareWinner.textContent ="You win! Rock beats Scissors";
            humanScore++;
        }else{
            declareWinner.textContent ="Tie! Computer chose Rock as well!";
        }
    }else if (humanChoice == "paper"){
        if(computerChoice == "scissors"){
            declareWinner.textContent ="You lose! Scissors beats Paper";
            computerScore++;
        }else if(computerChoice == "rock"){
            declareWinner.textContent ="You win! Paper beats Rock";
            humanScore++;
        }else{
            declareWinner.textContent ="Tie! Computer chose Paper as well!";
        }
    }else{
        if(computerChoice == "rock"){
            declareWinner.textContent ="You lose! Rock beats Scissors";
            computerScore++;
        }else if(computerChoice == "paper"){
            declareWinner.textContent ="You win! Scissors beats Paper";
            humanScore++;
        }else{
            declareWinner.textContent ="Tie! Computer chose Scissors as well!";
        }
    }

    scoreboard.textContent =`Human Score: ${humanScore}\nComputer Score: ${computerScore}`;

    if(humanScore + computerScore == 5){
        declareWinner.textContent = "Thanks for Playing!"
        humanScore = 0;
        computerScore = 0;
    }
}

scoreboard.textContent = `Human Score: ${humanScore}\nComputer Score: ${computerScore}`;

const btn = document.querySelectorAll(".btn");

btn.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        playRound(btn.id,getComputerChoice());
    })
})

