if(!localStorage.getItem("userInfo")) {
    window.location.href = "../index.html";   
}

const aboutBtn = document.querySelector(".about");
const startBtn = document.querySelector(".start");
const profileToggle = document.querySelector("#profileToggle");
const profileInfo = document.querySelector(".profile-info");
const closeProfileBtn = document.querySelector(".close-profile");
const avatarImages = document.querySelectorAll(".avatar-img");
const profileAvatar = profileToggle ? profileToggle.querySelector("img") : null;
const btnClick = new Audio("../assets/sounds/btns/btnClick.mp3");
const logoutBtn = document.querySelector(".logout");
const usernameText = document.querySelector(".username");
const changeUserBtn = document.querySelector(".change-user");
const changePassBtn = document.querySelector(".change-pass");
const AVATAR_STORAGE_KEY = "selectedAvatar";
const AVATAR_ALT_STORAGE_KEY = "selectedAvatarAlt";

function applySelectedAvatar(avatar, shouldPersist = true) {
    if (!profileAvatar) return;

    profileAvatar.src = avatar.src;
    profileAvatar.alt = avatar.alt;

    avatarImages.forEach((item) => item.classList.remove("selected-avatar"));
    avatar.classList.add("selected-avatar");

    if (shouldPersist) {
        localStorage.setItem(AVATAR_STORAGE_KEY, avatar.src);
        localStorage.setItem(AVATAR_ALT_STORAGE_KEY, avatar.alt);
    }
}

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

const storedUserInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

if (usernameText) {
    usernameText.textContent = storedUserInfo.userName || "user-name";
}

if (changeUserBtn && usernameText) {
    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.className = "username-input";
    usernameInput.placeholder = "New username";
    usernameInput.value = storedUserInfo.userName || "";
    usernameInput.style.display = "none";
    usernameText.insertAdjacentElement("afterend", usernameInput);

    const saveUsername = () => {
        const newUserName = usernameInput.value.trim().replaceAll(" ", "");

        if (!newUserName) {
            alert("Please enter a username");
            return;
        }
        if (newUserName.length < 8) {
            alert("Username must be at least 8 characters");
            return;
        }

        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
        userInfo.userName = newUserName;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        usernameText.textContent = newUserName;
        usernameText.style.display = "block";
        usernameInput.style.display = "none";
        changeUserBtn.textContent = "change username";
        changeUserBtn.dataset.mode = "edit";
    };

    changeUserBtn.addEventListener("click", () => {
        if (changeUserBtn.dataset.mode === "save") {
            saveUsername();
            return;
        }

        usernameText.style.display = "none";
        usernameInput.style.display = "inline-block";
        usernameInput.focus();
        usernameInput.select();
        changeUserBtn.textContent = "save";
        changeUserBtn.dataset.mode = "save";
    });
}

if (changePassBtn) {
    changePassBtn.addEventListener("click", () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
        const previousPassword = prompt("Enter your previous password");

        if (previousPassword === null) {
            return;
        }

        if (previousPassword !== userInfo.userPass) {
            alert("Previous password is incorrect");
            return;
        }

        const newPassword = prompt("Enter your new password");

        if (!newPassword || newPassword.trim() === "") {
            alert("Please enter a new password");
            return;
        }

        const cleanedPassword = newPassword.replaceAll(" ", "");
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(cleanedPassword);

        if (cleanedPassword.length < 8 || !hasSpecialCharacter) {
            alert("Password must be at least 8 characters and include a special character");
            return;
        }

        userInfo.userPass = cleanedPassword;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        alert("Password changed successfully");
    });
}

if (avatarImages.length > 0 && profileAvatar) {
    const savedAvatarSrc = localStorage.getItem(AVATAR_STORAGE_KEY);
    const savedAvatarAlt = localStorage.getItem(AVATAR_ALT_STORAGE_KEY);

    if (savedAvatarSrc) {
        profileAvatar.src = savedAvatarSrc;
        if (savedAvatarAlt) {
            profileAvatar.alt = savedAvatarAlt;
        }

        avatarImages.forEach((avatar) => {
            if (avatar.src === savedAvatarSrc) {
                avatar.classList.add("selected-avatar");
            }
        });
    }

    avatarImages.forEach((avatar) => {
        avatar.addEventListener("click", (e) => {
            e.stopPropagation();
            applySelectedAvatar(avatar);
        });
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

logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    btnClick.play();
    setTimeout(() => {
        window.location.replace("../index.html")
    }, 80);
});