/*
  Rock Paper Scissors (RPS) Game Pseudocode

  function computerPlay -> returns rock, paper or scissors 
  function playRound -> plays a single round of RPS, take two params: playerSelection, computerSelection
    returns string to declare winner "You Lose/Win. X beats Y"

  function playerSelection -> takes player selection, make it case insensitive!

  function game() -> calls playRound, to play 5 rounds, keep score.

  Use prompt() to get user input. 
  Use console.log() to display results

*/

/**
 * Function that generates a computer play for rock paper scissors.
 * @returns {String}  rock, paper, or scissors
 */
function computerPlay() {
  const OPTIONS = ["rock", "paper", "scissors"];
  const choice = OPTIONS[Math.floor(Math.random() * 3)];
  return choice;
}

function askPlayerInput() {
  let playerChoice = "";
  while (!verifyValidOption(playerChoice)) {
    playerChoice = makeCaseInsensitive(
      prompt("Type in 'rock', 'paper', or 'scissors'")
    );
  }
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection == computerSelection) {
    result = `It's a draw! Both players selected ${playerSelection}!`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
  return result;
}

function makeCaseInsensitive(string) {
  return string.toLowerCase();
}

function verifyValidOption(string) {
  switch (string) {
    case "rock":
    case "paper":
    case "scissors":
      return true;
    default:
      return false;
  }
}

function game() {
  return;
}
