var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");

var emailInput = document.getElementById("email_input");
var passwordInput = document.getElementById("password_input");
var passwordInput2 = document.getElementById("password_input2");
function validateForm() {
var x,y,y1;
    
     if (!validateEmail(emailInput.value)) {
        check1.innerHTML="Please Enter Valid Email.";
        check1.style.color = "red";
        x="false";
    } else {
        check1.innerHTML="";
x="true";
    }

    if(passwordInput.value.length < 8) {
        check2.innerHTML="Password must be 8 chars at least.";
        check2.style.color = "red";
        y="false";
    } else {
        check2.innerHTML="";
        y="true";
        if(passwordInput.value.length != passwordInput2.value.length ){
        check3.innerHTML="Password must be same";
        check3.style.color = "red";
        y1="false";
    }
        else{
            check3.innerHTML="";
            y1="true";
        }
    }

    if(x=="true"&&y=="true"&& y1=="true")
    {
        alert("well done! Your account has been created successfully" ); 
        emailInput.value="";
        passwordInput.value="";
        passwordInput2.value="";

    }
    
}
//Valid Email Function 
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



function signUp()
{
validateForm();
}
// -----------------------------------------------------------------------------------------------------------

var check4 = document.getElementById("check4");
var check5 = document.getElementById("check5");

var emailEnter = document.getElementById("email_enter");
var passwordEnter = document.getElementById("password_enter");

function validateForm2() {
    var x,y;
        
         if (!validateEmail(emailEnter.value)) {
            check4.innerHTML="Please Enter Valid Email.";
            check4.style.color = "red";
            x="false";
        } else {
            check4.innerHTML="";
    x="true";
        }
    
        if(passwordEnter.value.length < 8) {
            check5.innerHTML="Password must be 8 chars at least.";
            check5.style.color = "red";
            y="false";
        } else {
            check5.innerHTML="";
            y="true";
         }
    
        if(x=="true"&&y=="true")
        {
            alert("well done! Your account has been logedin successfully" ); 
            emailEnter.value="";
            passwordEnter.value="";
    
        }
}


function loginButton(){
    validateForm2();
}