const userNameInput = document.querySelector(".name");
const userPassInput = document.querySelector(".pass");
const signupBtn = document.querySelector(".sign-up");
const conditionsName = {
    digits : document.querySelector(".N1"),
    special : document.querySelector(".N2")
}
const conditionsPass = {
    digits : document.querySelector(".P1"),
    special : document.querySelector(".P2"),
    alphabets : document.querySelector(".P3")
}
const specialChar = ["!", "#", "$", "%", "@", "^", "<", ">", ",", "/", "?", "+", "=", "-", "[", "]", "{", "}", "|", ":", ";", "&", "*", "(", ")", "`", "~"];

signupBtn.addEventListener("click", () => {

    const userName = userNameInput.value.replaceAll(" ", "");
    const userPass = userPassInput.value.replaceAll(" ", "");
    const userNameArr = userName.split("");
    const userPassArr = userPass.split("");

    if (userName && userPass) {
        console.log(userNameArr.some(item => item.includes(specialChar)));
        if (userNameArr.length >= 8 && userPassArr.length >= 8 && !userNameArr.some(item => specialChar.includes(item))) {
            let userInfo = {
                userName,
                userPass
            };
            console.log(userName.split(""));
        }
    } else {
        alert("please enter password and user name");
    }
});