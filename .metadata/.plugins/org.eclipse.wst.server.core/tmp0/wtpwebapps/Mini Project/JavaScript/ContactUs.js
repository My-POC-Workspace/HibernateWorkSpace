let email = document.getElementById("email");
let passNode = document.getElementById('pass');

let err1 = document.getElementById('error1');
let err2 = document.getElementById('error2');

function validateEmail(){
    let mail = email.value;
    err1.innerHTML = "";
    if(mail === ""){
        err1.innerHTML = '<small>Email is required</small>';
        email.style.border = '1px solid red';
        return false; 
    }
    else if(!mail.includes('@') || mail.endsWith('@')){
        err1.innerHTML = '<small>Email is not valid</small>';
        email.style.border = '1px solid red';
        return false;
    }
    else{
        email.style.border = '1px solid green';
        return true;
    }
}

function validatePass(){
    var pass=passNode.value;
    err2.innerHTML = "";
    if(pass==''){
        err2.innerHTML="<small>Query must not be required</small>";
        passNode.style.border="2px solid red";
        return false;
    }
    else{
        passNode.style.border = "2px solid green";
        return true
    }
}
function validate(){
    let v1 = validateEmail();
    let v2 = validatePass();
    return (v1 && v2);
}


function validateHome(){
var username = document.getElementById("email").value;
var password = document.getElementById("pass").value;
if ( username  && password != null){
alert ("Your query is submitted!!!");
window.location = "index.html"; 
}
}

function home(){
    console.log("dbadhb");
    window.location = "../HTML/index.html"; 
}
