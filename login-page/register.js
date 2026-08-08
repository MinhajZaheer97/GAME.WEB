import { supabase } from "../backend.js";

const useremailInput = document.querySelector(".email");
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

signupBtn.addEventListener("click", async () => {
  const userName = userNameInput.value.replaceAll(" ", "");
  const userPass = userPassInput.value.replaceAll(" ", "");
  const useremail = useremailInput.value.replaceAll(" ", "");
  const userNameArr = userName.split("");
  const userPassArr = userPass.split("");

  const conditions = {
    condition1: userNameArr.length >= 8,
    condition2: userPassArr.length >= 8,
    condition3: !userNameArr.some((item) => specialChar.includes(item)),
    condition4: userPassArr.some((item) => specialChar.includes(item)),
  };

  if (userName && userPass && useremail) {
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
      const { data: userAvailable, error: userAvailableError } = await supabase
        .from("users")
        .select("userName")
        .eq("userName", userName);
      if (userAvailableError) {
        alert(userAvailableError.message);
        console.log("User Available Error:", userAvailableError);
        return;
      }
      if (userAvailable && userAvailable.length > 0) {
        alert("Username already taken");
        return;
      }


      const { data, error } = await supabase.auth.signUp({
        email: useremail,
        password: userPass,
      });

      if (error) {
        alert(error.message);
        return;
      }

      const { error: profileError } = await supabase.from("users").insert({
        id: data.user.id,
        userName: userName,
      });

      if (profileError) {
        alert(profileError.message);
        return;
      } else {
        window.location.href = "/start-page/startpage.html";
      }
    }
  } else {
    alert("please enter email, password and user name");
  }
});

showHidePass.addEventListener("click", () => {
  userPassInput.type = userPassInput.type === "password" ? "text" : "password";
  img.src = img.src.includes("view.png")
    ? "/assets/images/hidden.png"
    : "/assets/images/view.png";
});

const {
  data: { session },
} = await supabase.auth.getSession();

if (session) {
  window.location.href = "/start-page/startpage.html";
}
