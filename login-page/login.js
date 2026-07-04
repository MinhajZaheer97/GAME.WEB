let userName = document.querySelector(".name")
let userPass = document.querySelector(".pass")
let signupBtn = document.querySelector(".sign-up")
let loginBtn = document.querySelector(".login")


signupBtn.addEventListener("click" , ()=>{
    if(userName.value && userPass.value){
        let userInfo = {
            userName : userName.value,
            userPass : userPass.value
        }
        localStorage.setItem('user-info', JSON.stringify(userInfo))
        console.log(userInfo.userName);
    }else{
        alert("please enter password and user name")
    }
})

// localStorage.clear()