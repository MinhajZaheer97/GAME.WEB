const boxes = [...document.querySelectorAll(".box")];
const resetBtn = document.querySelector(".reset");
const winnerText = document.querySelector(".winner");

const drawSound = new Audio("../../../assets/sounds/tic-tac-toe/draw.wav");
const clickSound = new Audio("../../../assets/sounds/tic-tac-toe/click.wav");
const winSound = new Audio("../../../assets/sounds/tic-tac-toe/winner.wav");
const ok = new Audio("../../../assets/sounds/tic-tac-toe/ok.mp3");
const Music = new Audio("/assets/sounds/tic-tac-toe/ttt-main.mp3");

Music.loop = true;
Music.volume = 1;
Music.play();

let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    clickSound.play();
    box.classList.add("shake");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.classList.add("glow-o");
      box.disabled = true;

      winner();
    }
    if (winnerText.innerHTML === "") {
      randomMove();
      if (winnerText.innerText === "") {
        winner();
      }
    }
  });
});

function winner() {
  const winPoss = [
    boxes[0].innerHTML === boxes[1].innerHTML &&
      boxes[1].innerHTML === boxes[2].innerHTML &&
      boxes[0].innerHTML !== "",
    boxes[3].innerHTML === boxes[4].innerHTML &&
      boxes[4].innerHTML === boxes[5].innerHTML &&
      boxes[3].innerHTML !== "",
    boxes[6].innerHTML === boxes[7].innerHTML &&
      boxes[7].innerHTML === boxes[8].innerHTML &&
      boxes[6].innerHTML !== "",
    boxes[0].innerHTML === boxes[3].innerHTML &&
      boxes[3].innerHTML === boxes[6].innerHTML &&
      boxes[0].innerHTML !== "",
    boxes[1].innerHTML === boxes[4].innerHTML &&
      boxes[4].innerHTML === boxes[7].innerHTML &&
      boxes[1].innerHTML !== "",
    boxes[2].innerHTML === boxes[5].innerHTML &&
      boxes[5].innerHTML === boxes[8].innerHTML &&
      boxes[2].innerHTML !== "",
    boxes[0].innerHTML === boxes[4].innerHTML &&
      boxes[4].innerHTML === boxes[8].innerHTML &&
      boxes[0].innerHTML !== "",
    boxes[2].innerHTML === boxes[4].innerHTML &&
      boxes[4].innerHTML === boxes[6].innerHTML &&
      boxes[2].innerHTML !== "",
  ];
  if (
    winPoss[0] ||
    winPoss[1] ||
    winPoss[2] ||
    winPoss[3] ||
    winPoss[4] ||
    winPoss[5] ||
    winPoss[6] ||
    winPoss[7]
  ) {
    winnerText.innerText = turnO ? "Winner is X" : "Winner is O";
    winnerText.classList.add("win");
    winSound.play();
    boxes.forEach((box) => {
      box.disabled = true;
    });
  } else if (boxes.every((box) => box.innerHTML !== "")) {
    winnerText.classList.add("win");
    winnerText.innerText = "It's a tie!";
    drawSound.play();
  }
}

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    ok.play();
    box.classList.remove("glow-o", "glow-x", "shake"); 
  });
  turnO = true;
  winnerText.innerHTML = "";
});

function randomMove() {
  if (!turnO) {
    let emptyBoxes = boxes.some((box) => box.innerText === "");
    if (!emptyBoxes) return;
    while (true) {
      let random = Math.floor(Math.random() * boxes.length);
      if (boxes[random].innerText === "") {
        boxes[random].innerText = "X";
        boxes[random].classList.add("glow-x");
        boxes[random].disabled = true;
        turnO = true;
        break;
      }
    }
  }
}