class scoreBoard {
  constructor(wins = 0, draws = 0, losses = 0) {
    (this.wins = wins), (this.draws = draws), (this.losses = losses);
  }

  increaseWins() {
    this.wins++;
  }

  increaseDraws() {
    this.draws++;
  }

  increaseLosses() {
    this.losses++;
  }
}

/**
 * Function that generates a computer play for rock paper scissors.
 * @returns {String}  rock, paper, or scissors
 */
function computerPlay() {
  const OPTIONS = ["Rock", "Paper", "Scissors"];
  const choice = OPTIONS[Math.floor(Math.random() * 3)];
  return choice;
}

function checkWin(playerMove, computerMove) {
  let result = {
    message: "",
    record: "",
  };

  if (playerMove == computerMove) {
    result.message = `It's a draw! Both players selected ${playerMove}!`;
    result.record = "draw";
  } else if (
    (playerMove == "Rock" && computerMove == "Scissors") ||
    (playerMove == "Scissors" && computerMove == "Paper") ||
    (playerMove == "Paper" && computerMove == "Rock")
  ) {
    result.message = `You win! ${playerMove} beats ${computerMove}!`;
    result.record = "playerWin";
  } else {
    result.message = `You lose! ${computerMove} beats ${playerMove}!`;
    result.record = "playerLoss";
  }

  console.log(playerMove, computerMove, result);
  return result;
}

// Modified playRound function is called on click event.
// First parameter, is the click event -> extract innerHTML as the player selection.
function playRound(clickEvent) {
  const playerSelection = this.innerHTML;
  const computerSelection = computerPlay();

  return checkWin(playerSelection, computerSelection);
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

  const gameButtons = document.querySelectorAll(".rps-btn");
  gameButtons.forEach((button) => {
    button.addEventListener("click", playRound);
  });

  /*
  for (let gameNum = 1; gameNum <= 5; gameNum++) {
    let playerInput = askPlayerInput();
    let roundResult = playRound(playerInput, computerPlay());

    console.log(roundResult.message);
    scoreRecord[roundResult.record]++;
    console.log(
      `End of round ${gameNum}.\n Your score is: ${scoreRecord.playerWin} wins, ${scoreRecord.draw} draws, ${scoreRecord.playerLoss} losses.`
    );
  }*/

  console.log("Game over.");
}

game();

/*
  Add event listeners for each rps button.
  Each button should call the playRound function when clicked.
*/

// Temporary helper function to log
function logText(e) {
  console.log(this.innerHTML);
}
