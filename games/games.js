const TTTBtn = document.querySelector(".card1");
const RPSBtn = document.querySelector(".card2");
const btnClick = new Audio("/assets/sounds/btns/btnClick.mp3");

TTTBtn.addEventListener("click", () => {
    btnClick.play();
    setTimeout(() => {
        
        window.location.href = "./tic-tac-toe/main-menu.html";
    },80)

});

RPSBtn.addEventListener("click", () => {
    btnClick.play();

    setTimeout(() => {
        
        window.location.href = "./rock-paper-scissor/main-menu.html";
    },80)
});