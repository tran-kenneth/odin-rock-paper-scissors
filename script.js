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
  const playerSelection = clickEvent.target.innerHTML;
  const computerSelection = computerPlay();

  return checkWin(playerSelection, computerSelection);
}

function updateScore(result, currentScores) {
  let scoreToIncrease = result.record;

  switch (scoreToIncrease) {
    case "playerWin":
      currentScores.increaseWins();
      const winScore = document.querySelector(".num-wins");
      winScore.innerHTML = currentScores.wins;
      break;
    case "playerLoss":
      currentScores.increaseLosses();
      const lossScore = document.querySelector(".num-losses");
      lossScore.innerHTML = currentScores.losses;
      break;
    case "draw":
      currentScores.increaseDraws();
      const drawScore = document.querySelector(".num-draws");
      drawScore.innerHTML = currentScores.draws;
      break;
  }

  console.log(currentScores);
}

function game() {
  const playerScores = new scoreBoard();

  const gameButtons = document.querySelectorAll(".rps-btn");
  gameButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let roundResult = playRound(e);
      updateScore(roundResult, playerScores);
    });
  });
}

game();
