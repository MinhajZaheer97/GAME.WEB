const aboutBtn = document.querySelector(".about");
const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", () => {
    window.location.href = "./games/games.html";
});

aboutBtn.addEventListener("click", () => {
    window.location.href = "./about.html";
});