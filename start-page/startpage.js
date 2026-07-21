// const userInfo = JSON.parse(localStorage.getItem("userInfo"))

// let e = true;
// if(userInfo){
//     if(e){
//     window.location.href = "/start-page/startpage.html";
//     e = false;
//     }
// }
// localStorage.clear()

const aboutBtn = document.querySelector(".about");
const startBtn = document.querySelector(".start");
const profileToggle = document.querySelector("#profileToggle");
const profileInfo = document.querySelector(".profile-info");
const closeProfileBtn = document.querySelector(".close-profile");
const btnClick = new Audio("../assets/sounds/btns/btnClick.mp3");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        btnClick.play();
        setTimeout(() => {
            window.location.href = "/games/games.html";
        }, 80);
    });
}

if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
        btnClick.play();
        setTimeout(() => {
            window.location.href = "/info/aboutweb.html";
        }, 80);
    });
}

if (profileToggle && profileInfo) {
    const toggleProfileInfo = () => {
        profileInfo.classList.toggle("active");
    };

    profileToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleProfileInfo();
    });

    profileToggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleProfileInfo();
        }
    });

    if (closeProfileBtn) {
        closeProfileBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            profileInfo.classList.remove("active");
        });
    }

    document.addEventListener("click", (e) => {
        if (!profileInfo.contains(e.target) && !profileToggle.contains(e.target)) {
            profileInfo.classList.remove("active");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            profileInfo.classList.remove("active");
        }
    });
}