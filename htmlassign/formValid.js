var nameValid = /^[A-Za-z]{5,20}$/;
var dateValid = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
var space = /^[ ]+\S*$/;
var phoneno = /^[0-9]+$/;
var emailValid = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var firstNameValid = false;
var lastNameValid = false;
var dobValid = false;
var mobileValid = false;
var landlineValid = false;
var emailValid = false;
var resetForm = document.getElementById("reset");
var submitForm = document.getElementById("submit");
submitForm.disabled = true;

function isFirstNameValid() {
    var firstname = document.getElementById("firstname");
    var fname = document.getElementById("validFirstName");
    if (firstname.value.length < 5) {
        firstNameValid = false;
        fname.style.display = "block";
        fname.textContent = "Enter atleast 5 characters";
        firstname.style.borderColor = "red";
        validateForm();
    } else if (nameValid.test(firstname.value) == false) {
        firstNameValid = false;
        fname.style.display = "block";
        fname.textContent = "Sholud be only alphabets and within 20 characters";
        firstname.style.borderColor = "red";
        validateForm();
    } else {
        firstNameValid = true;
        fname.style.display = "";
        firstname.style.borderColor = "green";
        fname.textContent = "";
        validateForm();
    }
}

function isValidPhonenumber() {
    var mobile = document.getElementById("mobile");
    var mobileMsg = document.getElementById("validMobile");
    var start = parseInt(mobile.value.slice(0, 1));
    if (!mobile.value) {
        validMobile = false;
        mobileMsg.style.display = "block";
        mobileMsg.textContent = "mobile number can't be empty";
        mobile.style.borderColor = "red";
        validateForm();
    } else if (space.test(mobile.value)) {
        validMobile = false;
        mobileMsg.style.display = "block";
        mobileMsg.textContent = "Remove the spaces from biggining";
        mobile.style.borderColor = "red";
        validateForm();
    } else if (!number.test(mobile.value)) {
        validMobile = false;
        mobileMsg.style.display = "block";
        mobileMsg.textContent = "Enter only numbers";
        mobile.style.borderColor = "red";
        validateForm();
    } else if (start < 7) {
        validMobile = false;
        mobileMsg.style.display = "block";
        mobileMsg.textContent = "First number must be 7,8 or 9";
        mobile.style.borderColor = "red";
        validateForm();
    } else if (mobile.value.length < 10 || mobile.value.length > 10) {
        validMobile = false;
        mobileMsg.style.display = "block";
        mobileMsg.textContent = "Length must be 10";
        mobile.style.borderColor = "red";
        validateForm();
    } else {
        validMobile = true;
        mobileMsg.style.display = "";
        mobileMsg.textContent = "";
        mobile.style.borderColor = "green";
        validateForm();
    }
}