var user = document.getElementById("user");
var password = document.getElementById("pwd");
var eyeIcon = document.getElementById("eye-icon");
var eye = document.getElementById("hide-eye"); 
var eyeSlash = document.getElementById("hide-eye-slash");
var login = document.getElementById("login");
var hello = document.getElementById("hello");

eyeIcon.onclick= function(){

    if(password.type == "password"){ 
        password.type = "text"; 
        eye.style.display = "block"; 
        eyeSlash.style.display = "none";
    } else {
        password.type = "password"; 
        eye.style.display = "none"; 
        eyeSlash.style.display = "block";
    }
}

function loginClick(){
    var name = document.querySelector('#user-name');
    login.style.display = 'none';
    hello.style.display = 'block';
    if(user.value != '')    {
        name.innerHTML = user.value;
    }
    else {
        name.innerHTML = 'Tên đăng nhập rỗng';

    }
}

function logoutClick(){
    login.style.display = 'block';
    hello.style.display = 'none';
}


function formvalid() {
    var vaildpass = document.getElementById("pass").value;
  
    if (vaildpass.length < 8 || vaildpass.length >= 20) {
      document.getElementById("vaild-pass").innerHTML = "Minimum 8 characters";
      return false;
    } else {
      document.getElementById("vaild-pass").innerHTML = "";
    }
}

function blockSpecialChar(e){
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }