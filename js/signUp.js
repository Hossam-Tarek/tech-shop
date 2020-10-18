let check = document.getElementById("check");
let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");

let nameInput=document.getElementById("name_input");
let emailInput = document.getElementById("email_input");
let passwordInput = document.getElementById("password_input");
let passwordInput2 = document.getElementById("password_input2");
function validateForm() {

    if(nameInput.value.trim()==""){

        check.innerHTML="Please Enter your name.";
        check.style.color = "red";
    } else {
        check.innerHTML="";
    }
     if (!validateEmail(emailInput.value)) {
        check1.innerHTML="Please Enter Valid Email.";
        check1.style.color = "red";
    } else {
        check1.innerHTML="";
    }

    if(passwordInput.value.length < 8) {
        check2.innerHTML="Password must be 8 chars at least.";
        check2.style.color = "red";
    } else {
        check2.innerHTML="";
        if(passwordInput.value.length != passwordInput2.value.length ){
        check3.innerHTML="Password must be same";
        check3.style.color = "red";
    }
        else{
            check3.innerHTML="";
        }
    }

    if(check.innerHTML==""&&check1.innerHTML==""&&check2.innerHTML==""&& check3.innerHTML=="")
    {
        alert("well done! Your account has been created successfully" ); 
        nameInput.value="";
        emailInput.value="";
        passwordInput.value="";
        passwordInput2.value="";

    }
    
}
//Valid Email Function 
function validateEmail(email) 
{
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.getElementById("signup-btn").addEventListener("click", function() {
    validateForm();
  });
