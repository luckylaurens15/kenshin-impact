var errorEmail = document.getElementById("errorEmail");
var errorUsername = document.getElementById("errorUsername");
var errorPassword = document.getElementById("errorPassword");
var errorConfirmPassword = document.getElementById("errorConfirmPassword");
var errorConfirm = document.getElementById("errorConfirm");

function submitForm(){
  var form = document.getElementById("form_regis");
  form.submit();
}

function validate(){
  if(validateEmail() && validateUsername() && validatePassword() && validateConfirmPassword() && validateConfirmTnC()){
    submitForm();
  }
  // validateEmail();
  // validateUsername();
  // validatePassword();
  // validateConfirmPassword();
  // validateConfirmTnC();

  return false;
}

function validateEmail(){
  var email = document.getElementById("email").value;

  if(email == ''){
    errorEmail.innerHTML = "Email must be filled!";
    return false;
  }

  var atSymbol = email.indexOf('@');
  var dot = email.lastIndexOf('.');

  if(atSymbol < 1 || dot <= atSymbol + 1 || dot == email.length - 1 || email.indexOf("..") != -1 || email.indexOf(" ") != -1){
    errorEmail.innerHTML = "Input valid Email!!";
    return false;
  }
  errorEmail.innerHTML = '';
  return true;
}

function validateUsername(){
  var username = document.getElementById("username").value;
  
  if(username == ""){
    errorUsername.innerHTML = "Username must be filled!";
    return false;
  }
  if(username.length < 5){
    errorUsername.innerHTML = "Username must contain at least 5 characters."
    return false;
  }

  errorUsername.innerHTML = '';
  return true;
}

function validatePassword(){
  var password = document.getElementById("password").value;

  if(password == ''){
    errorPassword.innerHTML = "Password must be filled";
    return false;
  }
  if(password.length < 8){
    errorPassword.innerHTML = "Password must contain at least 8 characters."
    return false;
  }

  errorPassword.innerHTML = '';
  return true;
}

function validateConfirmPassword(){
  var confirmPassword = document.getElementById("confirmPassword").value;
  var password = document.getElementById("password").value;

  if(confirmPassword == ''){
    errorConfirmPassword.innerHTML = "Password confimartion must be filled";
    return false;
  }
  if(confirmPassword != password){
    errorConfirmPassword.innerHTML = "Confirm password must match password";
    return false;
  }

  errorConfirmPassword.innerHTML = '';
  return true;
}

function validateConfirmTnC(){
  var confirmTnC = document.getElementById("confirmTnC").checked;
  
  if(!confirmTnC){
    errorConfirm.innerHTML = "You must agree to the terms and conditions!"
    return false;
  }
  
  errorConfirm.innerHTML = '';
  return true;
}