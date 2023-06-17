let userName, password;

document.getElementById("loginform").addEventListener("submit",(event)=>{
  userName = document .getElementById ("username"). value;
  password = document. getElementById ("password"). value;

  userName =="admin" && password == " password "
  ? alert ("Login Successful")
  : alert ("Invalid username or password");
});