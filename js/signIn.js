//-----------------------------------------------------------------------

let check4 = document.getElementById("check4");
let check5 = document.getElementById("check5");

let emailEnter = document.getElementById("email_enter");
let passwordEnter = document.getElementById("password_enter");

function validateForm2() {
        
         if (!validateEmail(emailEnter.value)) {
            check4.innerHTML="Please Enter Valid Email.";
            check4.style.color = "red";
        } else {
            check4.innerHTML="";
        }
    
        if(passwordEnter.value.length < 8) {
            check5.innerHTML="Password must be 8 chars at least.";
            check5.style.color = "red";
        } else {
            check5.innerHTML="";
         }
    
        if(check4.innerHTML==""&&check5.innerHTML=="")
        {
            alert("well done! Your account has been logedin successfully" ); 
            emailEnter.value="";
            passwordEnter.value="";
    
        }
}

//Valid Email Function 
function validateEmail(email) 
{
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.getElementById("loginbtn").addEventListener("click", function() {
    validateForm2();
  });
  //---------------------------------------------------------------------------------