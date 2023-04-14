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

let computerChoice = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection == "paper") {
    console.log("You lose! Paper beats Rock");
  } else if (playerSelection === "rock" && computerSelection == "scissors") {
    console.log("You win! Rock beats Scissors");
  } else if (playerSelection === "rock" && computerSelection == "rock") {
    console.log("It's a tie! Both choose Rock");
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    console.log("You lose! Scissors beats Paper");
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    console.log("You win! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection == "paper") {
    console.log("It's a tie! Both choose Paper");
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    console.log("You lose! Rock beats Scissors");
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors beats Paper");
  } else if (
    playerSelection === "scissors" &&
    computerSelection == "scissors"
  ) {
    console.log("It's a tie! Both choose Scissors");
  } else {
    console.log("Stop breaking the rules dude!");
  }
}

let playerChoice = prompt("What's your move, bitch?").toLowerCase();

console.log("Player choice: " + playerChoice);
console.log("Computer choice: " + computerChoice);

playRound(playerChoice, computerChoice);
