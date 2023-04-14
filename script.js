function getComputerChoice() {
  let computerChoice;
  let randomNum = Math.random();
  if (randomNum <= 0.3) {
    computerChoice = "rock";
  } else if (randomNum > 0.3 && randomNum <= 0.6) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection === "rock" && computerSelection == "paper") {
    roundResult = "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection == "scissors") {
    roundResult = "You win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection == "rock") {
    roundResult = "It's a tie! Both choose Rock";
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    roundResult = "You lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    roundResult = "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection == "paper") {
    roundResult = "It's a tie! Both choose Paper";
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    roundResult = "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    roundResult = "You win! Scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection == "scissors"
  ) {
    roundResult = "It's a tie! Both choose Scissors";
  } else {
    roundResult = "Stop breaking the game dude!";
  }
  return roundResult;
}

let computerChoice = getComputerChoice();
let playerChoice = prompt("What's your move, bitch?").toLowerCase();

console.log("Player choice: " + playerChoice);
console.log("Computer choice: " + computerChoice);

console.log(playRound(playerChoice, computerChoice));
