const singlePlayer = document.querySelector(".singleplayer");
const multiplayer = document.querySelector(".multiplayer");

singlePlayer.addEventListener("click", () => {
    window.location.href = "./singleplayer/tic-tac-toe.html";
});

multiplayer.addEventListener("click", () => {
    window.location.href = "./multiplayer/tic-tac-toe.html";
});