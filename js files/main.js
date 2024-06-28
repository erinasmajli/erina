function validateForm(){
    var uname = document.getElementById("uname").value;
    var psw = document.getElementById("psw").value;
    var unameError = document.getElementById("unameError");
    var unameEmptyError = document.getElementById("unameEmptyError");
    var pswError = document.getElementById("pswError");
    var pswEmptyError = document.getElementById("pswEmptyError");
    var valid = true;
    

unameError.style.display = "none";
unameEmptyError.style.display = "none";
pswError.style.display = "none";
pswEmptyError.style.display = "none";

if (uname === "") {
    unameEmptyError.style.display = "block";
    valid = false;
  } else if (!/^[a-zA-Z0-9_]+$/.test(uname)) {
    unameError.style.display = "block";
    valid = false;
  }

  if (psw === "") {
    pswEmptyError.style.display = "block";
    valid = false;
  } else if (psw.length < 8) {
    pswError.style.display = "block";
    valid = false;
  }

  return valid;
}