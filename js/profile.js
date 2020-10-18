import UserData, {InvalidPassword, InvalidEmail, InvalidPhoneNumber, WrongPassword} from "./UserData.js";

// All inputs
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phoneNumber = document.getElementById("phone-number");
let address = document.getElementById("address");
let birthday = document.getElementById("birthday");
let gender = document.getElementById("gender");

// All buttons
let editButton = document.getElementById("form__edit-button");
let saveButton = document.getElementById("form__save-button");
let cancelButton = document.getElementById("form__cancel-button");


// Get the user data from the session storage.
let userData = sessionStorage.getItem("UserData");

// Display the user's data.
(function displayData(data) {
    if (data === null) {
        return;
    }
    userData = UserData.setObject(JSON.parse(data));
    console.log(userData);
})(userData);

editButton.addEventListener("click", editUserData);
cancelButton.addEventListener("click", cancelChanges);
saveButton.addEventListener("click", saveChanges);

// Edit the user data
function editUserData() {
    if (userData === null) {
        alert("Please sign in first.");
        return;
    }

    editButton.disabled  = true;
    saveButton.style.visibility = "visible";
    cancelButton.style.visibility = "visible";
    disableInputs(false);

    showData();
}

// Cancel all the changes
function cancelChanges() {
    cancelButton.style.visibility = "hidden";
    saveButton.style.visibility = "hidden";

    editButton.disabled = false;
    showData();
    disableInputs(true);
}

// Save all changes
function saveChanges() {

}

// Show data in all the input fields
function showData() {
    name.value = userData.getName();
    email.value = userData.getEmail();
    phoneNumber.value = userData.getPhoneNumber();
    address.value = userData.getAddress();
    gender.value = userData.getGender();

    let date = new Date(userData.getBirthday());

    let day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    let month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    let year = date.getFullYear();

    birthday.value = `${year}-${month}-${day}`;
}

// Save the changed data
function saveData() {

}

// Change all inputs availability
function disableInputs(disabled) {
    name.disabled = disabled;
    email.disabled = disabled;
    password.disabled = disabled;
    phoneNumber.disabled = disabled;
    address.disabled = disabled;
    birthday.disabled = disabled;
    gender.disabled = disabled;
}
