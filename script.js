let username = document.querySelector("#username");
let password = document.querySelector("#password");
let signInButton = document.querySelector("#signInButton");
let confirmPassword = document.querySelector("#confirmPassword");
let createAccountHeading = document.querySelector(".createAccountHeading");
let confirmPassLabel = document.querySelector("#confirmPassLabel");
let userInfo = localStorage.getItem("user") || "";
let passInfo = localStorage.getItem("pass") || "";

if (userInfo && passInfo) {
  signInButton.textContent = "Log in";
  confirmPassword.style.display = "none";
  createAccountHeading.style.display = "none";
  confirmPassLabel.style.display = "none";


}

signInButton.addEventListener("click", function () {
 if(userInfo && passInfo)
 {
  if(username.value===userInfo && password.value===passInfo)
  {
    console.log("login sucessfully");
  }
  else{

    console.log("username or password is incorrect");
  }
 }
  
  else {
   
    if (password.value === confirmPassword.value) {

      localStorage.setItem("user", username.value);
      localStorage.setItem("pass", password.value);

      console.log("Successfully created your account");

      location.reload();

    } else {
      console.log("Passwords do not match");
    }
  }
  // username.value = "";
  // password.value = "";
  // confirmPassword.value = "";
  

})

// localStorage.clear();

