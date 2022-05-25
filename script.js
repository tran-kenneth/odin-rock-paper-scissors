/**
 * Function that generates a computer play for rock paper scissors.
 * @returns {String}  rock, paper, or scissors
 */
function computerPlay() {
  const OPTIONS = ["Rock", "Paper", "Scissors"];
  const choice = OPTIONS[Math.floor(Math.random() * 3)];
  return choice;
}

function askPlayerInput() {
  let playerChoice = "";
  do {
    playerChoice = makeCaseInsensitive(
      prompt("Type in 'rock', 'paper', or 'scissors'")
    );
  } while (!verifyValidOption(playerChoice));
  return playerChoice;
}

// Modified playRound function is called on click event.
// First parameter, is the click event -> extract innerHTML as the player selection.
function playRound(clickEvent) {
  const playerSelection = this.innerHTML;
  const computerSelection = computerPlay();
  let result = {
    message: "",
    record: "",
  };

  if (playerSelection == computerSelection) {
    result.message = `It's a draw! Both players selected ${playerSelection}!`;
    result.record = "draw";
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    result.message = `You win! ${playerSelection} beats ${computerSelection}!`;
    result.record = "playerWin";
  } else {
    result.message = `You lose! ${computerSelection} beats ${playerSelection}!`;
    result.record = "playerLoss";
  }

  console.log(playerSelection, computerSelection, result);
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
      alert("That was an invalid option. Try again.");
      return false;
  }
}

function game() {
  const scoreRecord = {
    playerWin: 0,
    draw: 0,
    playerLoss: 0,
  };

  for (let gameNum = 1; gameNum <= 5; gameNum++) {
    let playerInput = askPlayerInput();
    let roundResult = playRound(playerInput, computerPlay());

    console.log(roundResult.message);
    scoreRecord[roundResult.record]++;
    console.log(
      `End of round ${gameNum}.\n Your score is: ${scoreRecord.playerWin} wins, ${scoreRecord.draw} draws, ${scoreRecord.playerLoss} losses.`
    );
  }

  console.log("Game over.");
}

//game();

/*
  Add event listeners for each rps button.
  Each button should call the playRound function when clicked.
*/
const gameButtons = document.querySelectorAll(".rps-btn");

// Temporary helper function to log
function logText(e) {
  console.log(this.innerHTML);
}

gameButtons.forEach((button) => {
  button.addEventListener("click", playRound);
});
