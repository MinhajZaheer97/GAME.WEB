const singlePlayer = document.querySelector(".singleplayer");
const multiplayer = document.querySelector(".multiplayer");

singlePlayer.addEventListener("click", () => {
    window.location.href = "./singlePlayer/r-p-s.html";
});

multiplayer.addEventListener("click", () => {
    window.location.href = "./multiplayer/r-p-s.html";
});