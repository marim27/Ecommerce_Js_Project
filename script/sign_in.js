// // display signin and regester
document.getElementById("Create_account_button").addEventListener("click", function () {
    document.getElementById("registerDiv").style.display = "block";
    document.getElementById("siginDiv").style.display = "none";
})
document.getElementById("Sign_in").addEventListener("click", function () {
    location.reload("../pages/signIn.html")
    document.getElementById("siginDiv").style.display = "block";
    document.getElementById("registerDiv").style.display = "none";
})

// //validation Regester form & save in localStorage
var namergx = /^[a-zA-z]{3,15}$/;
var passrgx = /^[A-Za-z0-9]{6,10}$/;
var emailrgx = /^[a-zA-z0-9]*(@)(yahoo|gmail|outlook)(.com)$/;
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var rePassword = document.getElementById("rePassword");
var invalidName = document.getElementById("invalid_name");
var invalidEmail = document.getElementById("invalid_email");
var invalidPassword = document.getElementById("invalid_password");
var invalidREPassword = document.getElementById("invalid_rePassword");
var ContinueButtonR = document.getElementById("Continue_buttonR");
var signCheckbox = document.getElementById("sign_checkbox")

ContinueButtonR.addEventListener("click", function () {
    if (namergx.test(userName.value) && passrgx.test(password.value) && emailrgx.test(email.value) && (password.value === rePassword.value)) {
        invalidName.innerHTML = " ";
        invalidEmail.innerHTML = " ";
        invalidPassword.innerHTML = " ";
        invalidREPassword.innerHTML = " ";
        localStorage.setItem("userName", userName.value)
        localStorage.setItem("password", password.value)
        localStorage.setItem("email", email.value)
        // location.replace("../pages/homepage.html")
        location.reload("../pages/signIn.html")
        document.getElementById("siginDiv").style.display = "block";
    document.getElementById("registerDiv").style.display = "none";
    }
    else {
        if (!namergx.test(userName.value)) {
            invalidName.innerHTML = "Username must be Characters only (3 or more)"
            userName.style.borderColor = "red"
        } else {
            invalidName.innerHTML = ""
        }
        if (!passrgx.test(password.value)) {
            invalidPassword.innerHTML = "Minimum 6 characters required"
            password.style.borderColor = "red"
        } else {
            invalidPassword.innerHTML = ""
        }
        if (!emailrgx.test(email.value)) {
            invalidEmail.innerHTML = "Enter a valid email address"
            email.style.borderColor = "red"
        } else {
            invalidEmail.innerHTML = ""
        }
        if (password.value != rePassword.value) {
            invalidREPassword.innerHTML = "Passwords not match"
            rePassword.style.borderColor = "red"
        } else {
            invalidREPassword.innerHTML = ""
        }
    }
})

// // get from localStorage sign in
var signEmail = document.getElementById("sign_email")
var signPassword = document.getElementById("sign_password")
var ContinueButtonS = document.getElementById("Continue_buttonS");
var emailSign = localStorage.getItem("email");
var passwordSign = localStorage.getItem("password");
ContinueButtonS.addEventListener("click", function () {
    if (emailSign === signEmail.value && passwordSign === signPassword.value) {
        localStorage.setItem("loginEmail", signEmail.value)
        localStorage.setItem("loginPasswordlogin", signPassword.value)
        location.replace("../pages/homepage.html")
    } else {
        document.getElementById("problem_sign").style.display = "block";
    }
})