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

function getPlayerChoice() {
  return prompt("What's your move, bitch?").toLowerCase();
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
    roundResult = "Stop trying to break the game dude!";
  }
  return roundResult;
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let roundResult;

  while (computerScore < 5 && playerScore < 5) {
    let i = 0;
    roundResult = playRound(getPlayerChoice(), getComputerChoice());
    console.log(roundResult);
    if (roundResult.includes("win") == true) {
      playerScore++;
      i++;
    } else if (roundResult.includes("lose") == true) {
      computerScore++;
      i++;
    }
    console.log(
      `Round ${i + 1} -> Computer: ${computerScore}, Player: ${playerScore}`
    );
    console.log(computerScore, playerScore);
  }

  if (playerScore === 5) {
    console.log("You won, bitch!");
  } else if (computerScore === 5) {
    console.log("You lost, sucker!");
  }
}
