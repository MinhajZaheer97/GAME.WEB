const showHidePass = document.querySelector(".show-pass");
const userPassInput = document.querySelector(".pass");
const img = showHidePass ? showHidePass.querySelector("img") : null;
const signinBtn = document.querySelector(".sign-in");
const userName = document.querySelector(".name");
const useremail = document.querySelector(".email");

if (showHidePass && userPassInput && img) {
  showHidePass.addEventListener("click", () => {
    userPassInput.type = userPassInput.type === "password" ? "text" : "password";
    img.src = img.src.includes("view.png")
      ? "/assets/images/hidden.png"
      : "/assets/images/view.png";
  });
}


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

signinBtn.addEventListener("click", async () => {
  const userNameValue = userName.value.replaceAll(" ", "");
  const userEmailValue = useremail.value.replaceAll(" ", "");

  if (userNameValue && userEmailValue) {
    const userInfo = {
      userName: userNameValue,
      userEmail: userEmailValue,
    };
  } else {
    alert("please enter email and user name");
  }
});
