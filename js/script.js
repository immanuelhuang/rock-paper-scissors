function computerPlay() {
  switch (choice = Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) return `You played ${playerSelection} and the computer played ${computerSelection}. It's a tie.`;
  else if ((playerSelection == "rock" && computerSelection == "scissor")
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissor" && computerSelection == "paper")) return `You played ${playerSelection} and the computer played ${computerSelection}. You win.`;
  else return `You played ${playerSelection} and the computer played ${computerSelection}. You lose.`
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(prompt("Rock, paper, or scissors?"), computerPlay()));
  }
}

game();
