let username=document.querySelector("#username");
let password=document.querySelector("#password");
let button=document.querySelector("button");
let userInfo=localStorage.getItem("user") || "";
let passInfo=localStorage.getItem("pass") || "";
button.addEventListener("click",function()
{
  if(userInfo==username.value && passInfo==password.value)
  {
    console.log("correct user name and password");
  }
  else{
    console.log("wrong user name and password");
  }
})
console.log(userInfo);
console.log(passInfo);
