/*
  Rock Paper Scissors (RPS) Game Pseudocode

  function computerPlay -> returns rock, paper or scissors 
  function playRound -> plays a single round of RPS, take two params: playerSelection, computerPlay
    returns string to declare winner "You Lose/Win. X beats Y"

  function playerSelection -> takes player selection, make it case insensitive!

  function game() -> calls playRound, to play 5 rounds, keep score.

  Use prompt() to get user input. 
  Use console.log() to display results

*/

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
