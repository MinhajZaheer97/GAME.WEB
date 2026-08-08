import { supabase } from "../backend";

const showHidePass = document.querySelector(".show-pass");
const userPassInput = document.querySelector(".pass");
const img = showHidePass ? showHidePass.querySelector("img") : null;
const signinBtn = document.querySelector(".sign-in");
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
  const userEmailValue = useremail.value.replaceAll(" ", "");
  const userPassValue = userPassInput.value.replaceAll(" ", "");
  
  if (userPassValue && userEmailValue) {

    const { data: signin, error: signinError } = await supabase.auth.signInWithPassword({
      email: userEmailValue,
      password: userPassValue,
    });

    if(signinError){
      alert('check your email or password');
      return
    }

    window.location.replace('../start-page/startpage.html')
    

  } else {
    alert("please enter email and user name");
  }
});


const {
  data: { session },
} = await supabase.auth.getSession();

if (session) {
  window.location.href = "/start-page/startpage.html";
}

