let CHOICES = ["rock", "paper", "scissor"];
let playerSelection;

window.addEventListener('click', function(e) {
  playerSelection = e.target.value;
  if (!CHOICES.includes(e.target.value)) return;
  e.target.classList.add(`${e.target.value}-clicked`);
  console.log(e);

  document.querySelector("#player-div img").src = "img/rock.png";
  document.querySelector("#computer-div img").src = "img/rock.png";
  document.querySelector("#score-message").style.visibility = "hidden";

  document.querySelector("#player-div").classList.add("player-shake");
  document.querySelector("#computer-div").classList.add("computer-shake");

  document.querySelectorAll("button").forEach( button => {
    button.disabled = true;
  });
});

document.querySelector("#player-div").addEventListener("animationend", () => {
  document.querySelector("#player-div").classList.remove("player-shake");
  document.querySelector("#computer-div").classList.remove("computer-shake");

  const scoreMessage = document.querySelector("#score-message");
  scoreMessage.style.visibility = "visible";
  scoreMessage.textContent = playRound(computerPlay());

  document.querySelectorAll("button").forEach( button => {
    button.disabled = false;
    button.classList.remove(`${button.value}-clicked`);
  });
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

  if (playerSelection === computerSelection) return `It's a tie.`;
  else if ((playerSelection == "rock" && computerSelection == "scissor")
      || (playerSelection == "paper" && computerSelection == "rock")
      || (playerSelection == "scissor" && computerSelection == "paper"))
    return `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}. You win!`;
  else return `${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}. You lose!`
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(something, computerPlay()));
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
