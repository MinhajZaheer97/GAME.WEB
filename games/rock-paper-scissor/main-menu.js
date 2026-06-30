const singlePlayer = document.querySelector(".singleplayer");
const multiplayer = document.querySelector(".multiplayer");
const btnClick = new Audio("../../assets/sounds/btns/btnClick.mp3");
const infosingle = document.querySelector(".s");
const infomulti = document.querySelector(".m");
const info = document.querySelector(".info");

singlePlayer.addEventListener("click", () => {
    btnClick.play();
    setTimeout(() => {
        
        window.location.href = "./singlePlayer/r-p-s.html";
    },80)
});

multiplayer.addEventListener("click", () => {
    btnClick.play();
    setTimeout(() => {
        
        window.location.href = "./multiplayer/r-p-s.html";
    },80)
});


infosingle.addEventListener("click", () => {
    btnClick.play();
    setTimeout(() => {
        
        window.location.href = "../../info/tic-tac-toe.about/tttsingle.html";
    },80)
});

infomulti.addEventListener("click", () => {
    btnClick.play();
    setTimeout(() => {
        
        window.location.href = "../../info/tic-tac-toe.about/tttmultiplayer.html";
    },80)
});