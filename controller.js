

function signin(){
    
var email=document.getElementById('email').value;
var password=document.getElementById('password').value;

if(email=="aman" && password=="aman"){
    window.location="./Admin_view/index.html",true;
    // alert("login done");
}
else{
    alert("hello");
}

}