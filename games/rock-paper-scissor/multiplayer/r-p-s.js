const player1 = document.querySelector(".player1Turn");
const player2 = document.querySelector(".player2Turn");
const optionsContainer1 = document.querySelector(".options-container1");
const optionsContainer2 = document.querySelector(".options-container2");
const optionPlayer1 = document.querySelectorAll(".optionPlayer1");
const optionPlayer2 = document.querySelectorAll(".optionPlayer2");
const overlay = document.querySelector(".overlay");
const winnerText = document.querySelector(".winner-text");
const winnerContainer = document.querySelector(".winner");
const newGame = document.querySelector(".newGame");
const fightBtn = document.querySelector(".fight");
const score = document.querySelector(".score");
let player1ScoreText = document.querySelector(".score1");
let player2ScoreText = document.querySelector(".score2");
const scoreContainer = document.querySelector(".score-container");

let player1Move;
let player2Move;

let player1Score = 0;
let player2Score = 0;

player1ScoreText.innerText = 0;
player2ScoreText.innerText = 0;

player1.addEventListener("click", () => {
  optionsContainer1.style.display = "block";
  player1.innerText = "Choose your move";
});

player2.addEventListener("click", () => {
  optionsContainer2.style.display = "block";
  player2.innerText = "Choose your move";
});

optionPlayer1.forEach((option) => {
  option.addEventListener("click", () => {
    player1.innerText = "you have selected the move";
    optionsContainer1.style.display = "none";
    player1Move = option.innerText;
    player1.disabled = true;
  });
});

optionPlayer2.forEach((option) => {
  option.addEventListener("click", () => {
    player2.innerText = "you have selected the move";
    optionsContainer2.style.display = "none";
    player2Move = option.innerText;
    player2.disabled = true;
  });
});

function winner() {
  if (player1Move === player2Move) {
    winnerText.innerText = "TIE";
  } else if (
    (player1Move === "Rock ✊" && player2Move === "Scissor ✌️") ||
    (player1Move === "Paper ✋" && player2Move === "Rock ✊") ||
    (player1Move === "Scissor ✌️" && player2Move === "Paper ✋")
  ) {
    winnerText.innerText = "PLAYER 1 WINS";
     player1Score++
    player1ScoreText.innerText = player1Score
  } else {
    winnerText.innerText = "PLAYER 2 WINS";
    player2Score++
    player2ScoreText.innerText = player2Score
  }

  overlay.style.display = "block";
  winnerContainer.style.display = "block";

}

newGame.addEventListener("click", () => {
  overlay.style.display = "none";
  winnerContainer.style.display = "none";
  player1Move = "";
  player2Move = "";
  player1.innerText = "PLAYER 1 TURN";
  player2.innerText = "PLAYER 2 TURN";
  player1.disabled = false;
  player2.disabled = false;
});

fightBtn.addEventListener("click", () => {
    if (player1Move && player2Move) {
      winner();
    }
});

scoreContainer.classList.add("hide");

    score.addEventListener("click", () => {
        scoreContainer.classList.toggle("hide");
    });


