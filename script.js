// Player choice is rock
let rock = document.getElementById("rock");
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));

// Player choice is paper
let paper = document.getElementById("paper");
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));

// Player choice is scissors
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

// Computer generates a random choice for rock, paper or scissors
function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum <= 0.3) {
    return "rock";
  } else if (randomNum > 0.3 && randomNum <= 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Creates a div with a text that shows the round result
const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

// Sets scores at 0 to begin
let computerScore = 0;
let playerScore = 0;

// Creates a div with a text that shows the computer score
const computerScoreDiv = document.createElement("div");
document.body.appendChild(computerScoreDiv);
computerScoreDiv.setAttribute("id", "computerScore");
computerScoreDiv.textContent = computerScore;

// Creates a div with a text that shows the player score
const playerScoreDiv = document.createElement("div");
document.body.appendChild(playerScoreDiv);
playerScoreDiv.setAttribute("id", "playerScore");
playerScoreDiv.textContent = playerScore;

// Creates a div with a text that shows the winner of the game
const winnerDiv = document.createElement("div");
document.body.appendChild(winnerDiv);
winnerDiv.setAttribute("id", "winnerDiv");

// Takes the player and the computer choices, compares them and returns the result
function playRound(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection === "rock" && computerSelection == "paper") {
    roundResult = "You lose! Paper beats Rock";
    computerScoreDiv.textContent = ++computerScore;
  } else if (playerSelection === "rock" && computerSelection == "scissors") {
    roundResult = "You win! Rock beats Scissors";
    playerScoreDiv.textContent = ++playerScore;
  } else if (playerSelection === "rock" && computerSelection == "rock") {
    roundResult = "It's a tie! Both choose Rock";
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    roundResult = "You lose! Scissors beats Paper";
    computerScoreDiv.textContent = ++computerScore;
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    roundResult = "You win! Paper beats Rock";
    playerScoreDiv.textContent = ++playerScore;
  } else if (playerSelection === "paper" && computerSelection == "paper") {
    roundResult = "It's a tie! Both choose Paper";
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    roundResult = "You lose! Rock beats Scissors";
    computerScoreDiv.textContent = ++computerScore;
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    roundResult = "You win! Scissors beats Paper";
    playerScoreDiv.textContent = ++playerScore;
  } else if (
    playerSelection === "scissors" &&
    computerSelection == "scissors"
  ) {
    roundResult = "It's a tie! Both choose Scissors";
  } else {
    roundResult = "Stop trying to break the game dude!";
  }
  resultDiv.textContent = roundResult;
  checkWinner();
}

// Checks if player won
function checkWinner() {
  if (playerScore > 4) {
    winnerDiv.textContent = "You won, bitch!";
  } else if (computerScore > 4) {
    winnerDiv.textContent = "You lost, sucker!";
  }
}
