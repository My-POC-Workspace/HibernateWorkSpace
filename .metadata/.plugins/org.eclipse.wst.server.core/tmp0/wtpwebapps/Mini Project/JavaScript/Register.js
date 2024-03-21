let unameNode = document.getElementById("email");
let emailNode = document.getElementById("pass");
let passNode = document.getElementById("pass1");
let c_passNode = document.getElementById("cpass");

let error1 = document.getElementById('err1');
let error2 = document.getElementById('err2');
let error3 = document.getElementById('err3');
let error4 = document.getElementById('err4');

function validateUser(){
    let uname=unameNode.value;
    error1.innerHTML = "";
    if(uname===''){
        error1.innerHTML="<small>User name is required</small>";
        unameNode.style.border="2px solid red";
        return false
    }
    else if(uname.length < 3 || uname.length > 10){
        error1.innerHTML="<small>Username should have length b/w 3 to 10</small>";
        unameNode.style.border = '2px solid red';
        return false
    } 
    else{
        unameNode.style.border = "2px solid green";
        return true;
    }
}
function validateEmail(){
    let mail=emailNode.value;
    error2.innerHTML = "";
    if(mail===''){
        error2.innerHTML="<small>Email is required</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else if(!mail.includes('@') || mail.endsWith('@')){
        error2.innerHTML="<small>Email is not valid</small>"
        emailNode.style.border = "2px solid red"
        return false
    }
    else{
        emailNode.style.border = "2px solid green";
        return true
    }   
}

function validatePass(){
    var pass=passNode.value;
    error3.innerHTML = "";
    let pat3 = RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$")
    if(pass===''){
        error3.innerHTML="<small>Password is required</small>";
        passNode.style.border="2px solid red";
        return false;
    }
    else if(pat3.test(pass) == false){
        error3.innerHTML="<small>Password is invalid</small>";
        passNode.style.border = "2px solid red";
        return false
    }
    else{
        passNode.style.border = "2px solid green";
        return true
    }
}
function validateCPass(){
    let confirmpass=c_passNode.value;
    let pass = passNode.value;
    error4.innerHTML = "";
    if(confirmpass===''){
        error4.innerHTML="<small>Confirm Password is required</small>";
        c_passNode.style.border="2px solid red";
        return false
    }
    else if(confirmpass != pass){
        error4.innerHTML="<small>Password not matching</small>";
        c_passNode.style.border = '2px solid red';
        return false
    }
    else{
        c_passNode.style.border = "2px solid green";
        return true;
    }   
}

function validate(){
    let v1 = validateUser();
    let v2 = validateEmail();
    let v3 = validatePass();
    let v4 = validateCPass();
    return (v1 && v2 && v3 && v4);  
}

function validateLogin(){
    var username = document.getElementById("email").value;
    var email = document.getElementById("pass").value;
    var password = document.getElementById("pass1").value;
    var c_password = document.getElementById("cpass").value;
    if ( username  && email && password && c_password != null ){
    window.alert ("Register successful!!!");
    window.location = "Login.html"; // Redirecting to other page.
    }
    }