let player1 = document.querySelector(".player1Turn");
let player2 = document.querySelector(".player2Turn");
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

const winsound = new Audio("../../../assets/sounds/rps/winning.wav");
const losesound = new Audio("../../../assets/sounds/rps/loose.mp3");
const drawsound = new Audio("../../../assets/sounds/rps/draw.wav");
const newbtnSound = new Audio("../../../assets/sounds/rps/ok.mp3");
const fightSound = new Audio("../../../assets/sounds/rps/fight.mp3");
const btnClick = new Audio("../../../assets/sounds/btns/btnClick.mp3");
const backgroundMusic = new Audio("/assets/sounds/rps/rps-main.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 1;
backgroundMusic.play();

player2.disabled = true;

let player1Move;
let player2Move;

let player1Score = 0;
let player2Score = 0;

player1ScoreText.innerText = 0;
player2ScoreText.innerText = 0;

function aimove() {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    player2Move = "Rock ✊";
    player2.innerText = "AI selected Rock ✊";
  } else if (random === 1) {
    player2Move = "Paper ✋";
    player2.innerText = "AI selected Paper ✋";
  } else {
    player2Move = "Scissor ✌️";
    player2.innerText = "AI selected Scissor ✌️";
  }
}

player1.addEventListener("click", () => {
  optionsContainer1.style.display = "block";
  btnClick.play();
  player1.innerText = "Choose your move";
});

optionPlayer1.forEach((option) => {
  option.addEventListener("click", () => {
    player1.innerText = "you have selected the move";
    optionsContainer1.style.display = "none";
    player1Move = option.innerText;
    player1.disabled = true;
    player1.innerText = option.innerText
    btnClick.play();
  });
});

function winner() {
  if (player1Move === player2Move) {
    winnerText.innerText = "TIE";
    drawsound.play();
  } else if (
    (player1Move === "Rock ✊" && player2Move === "Scissor ✌️") ||
    (player1Move === "Paper ✋" && player2Move === "Rock ✊") ||
    (player1Move === "Scissor ✌️" && player2Move === "Paper ✋")
  ) {
    winnerText.innerText = "PLAYER 1 WINS";
    winsound.play();
     player1Score++
    player1ScoreText.innerText = player1Score
  } else {
    losesound.play();
    winnerText.innerText = "AI WINS";
    player2Score++
    player2ScoreText.innerText = player2Score
  }

  overlay.style.display = "block";
  winnerContainer.style.display = "block";

}

newGame.addEventListener("click", () => {
  newbtnSound.play();
  overlay.style.display = "none";
  winnerContainer.style.display = "none";
  player1Move = "";
  player2Move = "";
  player1.innerText = "Choose your move";
  player2.innerText = "AI move";
  player1.disabled = false;
  player2.disabled = false;
});

fightBtn.addEventListener("click", () => {
    if (player1Move) {
      aimove();
      fightSound.play();
      setTimeout(() => {
        winner();
      }, 1000);
    }else{
        alert("Please select your moves first")
    }
});

scoreContainer.classList.add("hide");

    score.addEventListener("click", () => {
        scoreContainer.classList.toggle("hide");
    });
