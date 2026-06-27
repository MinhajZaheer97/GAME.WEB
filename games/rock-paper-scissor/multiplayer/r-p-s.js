const player1 = document.querySelector(".player1Turn");
const player2 = document.querySelector(".player2Turn");
const optionsContainer1 = document.querySelector(".options-container1");
const optionsContainer2 = document.querySelector(".options-container2");
const optionPlayer1 = document.querySelectorAll(".optionPlayer1");
const optionPlayer2 = document.querySelectorAll(".optionPlayer2");

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
        player1.disabled = true;
    });
});

optionPlayer2.forEach((option) => {
    option.addEventListener("click", () => {
        player2.innerText = "you have selected the move";
        optionsContainer2.style.display = "none";
        player2.disabled = true;
    });
});