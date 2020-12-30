let CHOICES = ["rock", "paper", "scissor"];
let playerSelection;
let playerScore = 0;
let computerScore = 0;

window.addEventListener('click', function(e) {
  if (CHOICES.includes(e.target.value)) {
    playerSelection = e.target.value;
    e.target.classList.add(`${e.target.value}-clicked`);

    document.querySelector("#player-div img").src = "img/rock.png";
    document.querySelector("#computer-div img").src = "img/rock.png";
    document.querySelector("#score-message").style.visibility = "hidden";

    document.querySelector("#player-div").classList.add("player-shake");
    document.querySelector("#computer-div").classList.add("computer-shake");

    document.querySelectorAll("button").forEach( button => {
      button.disabled = true;
    });
  } else if (e.target.id === "overlay") {
    document.querySelector("#player-div img").src = "img/rock.png";
    document.querySelector("#computer-div img").src = "img/rock.png";
    e.target.style.display = "none";
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#scoreboard").textContent = `${playerScore} : ${computerScore}`;
    const scoreMessage = document.querySelector("#score-message");
    scoreMessage.style.visibility = "hidden";
    scoreMessage.classList.remove("blink", "overlay-text");
    const title = document.querySelector("h2");
    title.textContent = "Can you beat the computer?";
    title.classList.remove("overlay-text");
  }
});

document.querySelector("#player-div").addEventListener("animationend", () => {
  document.querySelector("#player-div").classList.remove("player-shake");
  document.querySelector("#computer-div").classList.remove("computer-shake");

  const scoreMessage = document.querySelector("#score-message");
  scoreMessage.style.visibility = "visible";
  scoreMessage.textContent = playRound(computerPlay());

  document.querySelector("#scoreboard").textContent = `${playerScore} : ${computerScore}`;

  document.querySelectorAll("button").forEach( button => {
    button.disabled = false;
    button.classList.remove(`${button.value}-clicked`);
  });

  reset();
});

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

function playRound(computerSelection) {
  document.querySelector("#player-div img").src = `img/${playerSelection}.png`;
  document.querySelector("#computer-div img").src = `img/${computerSelection}.png`;

  if (playerSelection === computerSelection) {
    return `It's a tie.`;
  }
  else if ((playerSelection == "rock" && computerSelection == "scissor")
      || (playerSelection == "paper" && computerSelection == "rock")
      || (playerSelection == "scissor" && computerSelection == "paper")) {
    playerScore++;
    return `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}. You win!`;
  }
  else {
    computerScore++;
    return `${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}. You lose!`
  }
}

function reset() {
  if (playerScore !== 3 && computerScore !== 3) return;

  document.querySelector("#overlay").style.display = "block";

  if (playerScore > computerScore) {
    document.querySelector("h2").textContent = "You beat the computer!";
  } else {
    document.querySelector("h2").textContent = "You lost to the computer.";
  }

  const playAgain = document.querySelector("#score-message");
  playAgain.textContent = "Click anywhere to play again.";
  playAgain.classList.add("blink");

  document.querySelector("#score-message").classList.add("blink", "overlay-text");
  document.querySelector("h2").classList.add("overlay-text");
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
