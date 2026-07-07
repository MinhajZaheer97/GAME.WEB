const userNameInput = document.querySelector(".name");
const userPassInput = document.querySelector(".pass");
const signupBtn = document.querySelector(".sign-up");
const nameCon = document.querySelector(".name-con");
const passCon = document.querySelector(".pass-con");
const showHidePass = document.querySelector(".show-pass");
const img = showHidePass.querySelector("img");
const conditionsName = {
  digits: document.querySelector(".N1"),
  special: document.querySelector(".N2"),
};
const conditionsPass = {
  digits: document.querySelector(".P1"),
  special: document.querySelector(".P2"),
};
const specialChar = [
  "!",
  "#",
  "$",
  "%",
  "@",
  "^",
  "<",
  ">",
  ",",
  "/",
  "?",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ":",
  ";",
  "&",
  "*",
  "(",
  ")",
  "`",
  "~",
];

signupBtn.addEventListener("click", () => {
  const userName = userNameInput.value.replaceAll(" ", "");
  const userPass = userPassInput.value.replaceAll(" ", "");
  const userNameArr = userName.split("");
  const userPassArr = userPass.split("");

  const conditions = {
    condition1: userNameArr.length >= 8,
    condition2: userPassArr.length >= 8,
    condition3: !userNameArr.some((item) => specialChar.includes(item)),
    condition4: userPassArr.some((item) => specialChar.includes(item)),
  };

  if (userName && userPass) {
    if (conditions.condition1) {
      conditionsName.digits.style.color = "green";
      nameCon.style.display = "block";
    } else {
      conditionsName.digits.style.color = "red";
      nameCon.style.display = "block";
    }
    if (conditions.condition2) {
      conditionsPass.digits.style.color = "green";
      passCon.style.display = "block";
    } else {
      conditionsPass.digits.style.color = "red";
      passCon.style.display = "block";
    }
    if (conditions.condition3) {
      conditionsName.special.style.color = "green";
      nameCon.style.display = "block";
    } else {
      conditionsName.special.style.color = "red";
      nameCon.style.display = "block";
    }
    if (conditions.condition4) {
      conditionsPass.special.style.color = "green";
      passCon.style.display = "block";
    } else {
      conditionsPass.special.style.color = "red";
      passCon.style.display = "block";
    }

    if (
      conditions.condition1 &&
      conditions.condition2 &&
      conditions.condition3 &&
      conditions.condition4
    ) {
      const userInfo = {
        userName,
        userPass,
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      window.location.href = "/start-page/startpage.html";
      document.body.innerHTML = "";
      setTimeout(() => {
        location.replace("./start-page/startpage.html");
      }, 100);
    }
  } else {
    alert("please enter password and user name");
  }
});

showHidePass.addEventListener("click", () => {
  userPassInput.type = userPassInput.type === "password" ? "text" : "password";
  img.src = img.src.includes("view.png")
    ? "/assets/images/hidden.png"
    : "/assets/images/view.png";
});

// localStorage.clear()
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

if (userInfo) {
  document.body.innerHTML = "";
  setTimeout(() => {
    location.replace("./start-page/startpage.html");
  }, 0);
}
