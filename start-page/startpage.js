const aboutBtn = document.querySelector(".about");
const startBtn = document.querySelector(".start");
const btnClick = new Audio("../assets/sounds/btns/btnClick.mp3");


startBtn.addEventListener("click", () => {
    btnClick.play();
    setTimeout(() => {   
        window.location.href = "/games/games.html";
    },80)
});

aboutBtn.addEventListener("click", () => {
    btnClick.play();
    setTimeout(() => {
        window.location.href = "/info/aboutweb.html";
    },80)
});

