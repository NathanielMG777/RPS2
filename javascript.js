const main = document.getElementById("main");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function(event) {
    userChoice = "r";
    rockPaperScissor("r");
})

paper.addEventListener("click", function(event) {
    userChoice = "p";
    rockPaperScissor("p");
})

scissors.addEventListener("click", function(event) {
    userChoice = "s";
    rockPaperScissor("s");
})

var userchoice;
var computerNumber;
var computerChoice;
var winOrLose;

var globalTies = 0
var globalWins = 0;
var globalLosses = 0;

const template = `
    <h2>Wins: ${globalWins}</h2>
    <h2>Ties: ${globalTies}</h2>
    <h2>Losses: ${globalLosses}</h2>
`
main.innerHTML = template;


function randomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
// ^ Random # generator

function rockPaperScissor(input) {
    let computerNumber = randomNumber(3);
    if(computerNumber == 0) {
        var computerChoice = "r";
    } else if(computerNumber == 1) {
        var computerChoice = "p";
    } else if(computerNumber == 2) {
        var computerChoice = "s";
    }

    if(input === "r" && computerChoice === "p") {
        winOrLose = false;
    } else if(input === "r" && computerChoice === "s") {
        winOrLose = true;
    } else if(input === "p" && computerChoice === "r") {
        winOrLose = true;
    } else if(input === "p" && computerChoice === "s") {
        winOrLose = false;
    } else if (input === "s" && computerChoice === "r") {
        winOrLose = false;
    } else if(input === "s" && computerChoice === "p") {
        winOrLose = true;
    }

const info = document.createElement("p");
if(input === computerChoice) {
    info.textContent ="It's a tie!";
    globalTies++
} else if(winOrLose == true){
    info.textContent ="You win, you picked " + userChoice + " which beats " + computerChoice;
    globalWins++
} else if(winOrLose == false) {
    info.textContent = "You lose, the computer picked " + computerChoice + " which beats " + userChoice;
    globalLosses++
}
 
const template = `
    <h2>Wins: ${globalWins}</h2>
    <h2>Ties: ${globalTies}</h2>
    <h2>Losses: ${globalLosses}</h2>
`
    main.innerHTML = template;
    main.appendChild(info);
}    