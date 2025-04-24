let passwordInput=document.getElementById("pass")
let btn=document.getElementById("btn")
function showPassword(){
  let oldType=passwordInput.type;
  if(oldType == "password"){
    passwordInput.type="text"
    btn.innerHTML="hide"
  }else{
      passwordInput.type="password"
    btn.innerHTML="text"

  }
}