document.body.style.backgroundImage = "url('images/2.2.png'), url('images/2.3.png')";


function signup(){
    var login=document.querySelector('.login-password');
    var signup=document.querySelector('.signup-password');
    signup.style.display='block';
    setTimeout(function(){
        login.style.width='0';
        login.style.transition='.3s';
        signup.style.width='100%';
        signup.style.transition='.3s';
    }, 5);
    setTimeout(function(){login.style.display='none'},250);
    console.log("1")
}

function login(){
    var login=document.querySelector('.login-password');
var signup=document.querySelector('.signup-password');
    login.style.display='block';
    setTimeout(function(){
        signup.style.width='0';
        signup.style.transition='.3s';
        login.style.width='100%';
        login.style.transition='.3s';
    }, 5);
    setTimeout(function(){signup.style.display='none'},250);
    console.log("2")
}