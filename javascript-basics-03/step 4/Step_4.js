
function checkConfirmation(){
  let password = document.getElementById("password");
  let confirmation = document.getElementById("confirmation");
  if (password.value != confirmation.value){
    confirmation.style.border = "1px solid red";
    password.style.border = "1px solid red";
  }
}
