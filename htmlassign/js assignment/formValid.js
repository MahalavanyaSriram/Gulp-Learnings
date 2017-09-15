const nameValid = /^[A-Za-z]{5,20}$/;
const dateValid = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
const space = /^[ ]+\S*$/;
const phoneno = /^(0|\+91-)[7-9]{1}[0-9]{9}$/;
const landlineno = /^(044)([ ]|-)[1-9]{4}[ ]?[0-9]{4}$/;
const emailIdValid = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]{2,3}$/
var firstNameValid = false;
var lastNameValid = false;
var dobValid = false;
var mobileValid = false;
var landlineValid = false;
var emailValid = false;
var permanentAddrsValid = false;
var temporaryAddrsValid = false;



function isFirstNameValid() {
    var firstname = document.getElementById("firstname");
    var fname = document.getElementById("validFirstName");
    if (firstname.value.length < 5) {

        firstNameValid = false;
        fname.textContent = "Enter atleast 5 characters";
        firstname.style.borderColor = "red";

    } else if (nameValid.test(firstname.value) == false && firstname.value.length <= 20) {
        firstNameValid = false;

        fname.textContent = "Sholud be only alphabets";
        firstname.style.borderColor = "red";

    } else if (firstname.value.length > 20) {
        firstNameValid = false;

        fname.textContent = "Length should be only within 20 characters";
        firstname.style.borderColor = "red";

    } else {
        firstNameValid = true;

        firstname.style.borderColor = "green";
        fname.textContent = "";

    }
}

function isLastNameValid() {
    var lastName = document.getElementById("lastname");
    var lname = document.getElementById("validLastName");
    if (lastName.value.length < 5) {
        lastNameValid = false;
        lname.textContent = "Enter atleast 5 characters";
        lastName.style.borderColor = "red";

    } else if (nameValid.test(lastName.value) == false && lastName.value.length <= 20) {
        lastNameValid = false;
        lname.textContent = "Sholud be only alphabets";
        lastName.style.borderColor = "red";

    } else if (lastName.value.length > 20) {
        lastNameValid = false;
        lname.textContent = "Length should be only within 20 characters";
        lastName.style.borderColor = "red";

    } else {
        lastNameValid = true;
        lastName.style.borderColor = "green";
        lname.textContent = "";

    }
}

function isDateValid() {
    var date = document.getElementById("dob");
    var datespan = document.getElementById("validDob");
    var year = parseInt(date.value.slice(0, 4));
    var month = parseInt(date.value.slice(5, 7));
    var day = parseInt(date.value.slice(8, 10));
    if (date.value.length < 1) {
        dobValid = false;
        datespan.textContent = "Date can't be empty";
        date.style.borderColor = "red";

    } else if (dateValid.test(date.value) == false) {
        dobValid = false;
        datespan.textContent = "Enter date in yyyy-mm-dd format";
        date.style.borderColor = "red";

    } else if (year < 1990 || year > 2000) {
        dobValid = false;
        datespan.textContent = "year must be between 1990 to 2000";
        date.style.borderColor = "red";

    } else if (month < 1 || month > 12) {
        dobValid = false;
        datespan.textContent = "month value must be between 1 to 12";
        date.style.borderColor = "red";

    } else if (day < 1 || day > 31) {
        dobValid = false;
        datespan.textContent = "day value must be between 1 to 31";
        date.style.borderColor = "red";

    } else {
        dobValid = true;
        date.style.borderColor = "green";
        datespan.textContent = "";

    }
}

function isMobileValid() {
    var mobile = document.getElementById("mobile");
    var mobilespan = document.getElementById("validMobile");
    if (!mobile.value) {
        mobileValid = false;
        mobilespan.textContent = "mobile number can't be empty";
        mobile.style.borderColor = "red";

    } else if (!phoneno.test(mobile.value)) {
        mobileValid = false;
        mobilespan.textContent = "Enter valid number \n Should start with 0 or +91";
        mobile.style.borderColor = "red";

    } else {
        mobileValid = true;
        mobilespan.textContent = "";
        mobile.style.borderColor = "green";

    }
}

function isLandlineValid() {
    var landline = document.getElementById("landline");
    var landlinespan = document.getElementById("validLandline");
    if (!landlineno.test(landline.value)) {
        landlineValid = false;
        landlinespan.textContent = "Enter valid number \n Should start with 044";
        landline.style.borderColor = "red";

    } else {
        landlineValid = true;
        landlinespan.textContent = "";
        landline.style.borderColor = "green";

    }
}


function isEmailValid() {
    var email = document.getElementById("email");
    var emailspan = document.getElementById("validEmail");
    if (!email.value) {
        emailValid = false;
        emailspan.textContent = "email can't be empty";
        email.style.borderColor = "red";


    } else if (!emailIdValid.test(email.value)) {
        emailValid = false;

        emailspan.textContent = "Pattern mismatch Enter valid id";
        email.style.borderColor = "red";

    } else {
        emailValid = true;
        emailspan.textContent = "";
        email.style.borderColor = "green";

    }
}

function isPermanentAddressValid() {
    var per = document.getElementById("peraddrs");
    var perContent = document.getElementById("peraddrs").value;
    var perAddrsspan = document.getElementById("validPerAddrs");
    if (perContent.length < 10) {
        permanentAddrsValid = false;

        perAddrsspan.textContent = "Address should have atleast 10 characters";
        per.style.borderColor = "red";

    } else {
        permanentAddrsValid = true;
        perAddrsspan.textContent = " ";
        per.style.borderColor = "green";
    }
}

function isTemporaryAddressValid() {
    var temp = document.getElementById("tempaddrs");
    var tempContent = document.getElementById("tempaddrs").value;
    var tempAddrsspan = document.getElementById("validTempAddrs");
    if (tempContent.length < 10) {
        temporaryAddrsValid = false;

        tempAddrsspan.textContent = "Address should have atleast 10 characters";
        temp.style.borderColor = "red";

    } else {
        temporaryAddrsValid = true;
        tempAddrsspan.textContent = " ";
        temp.style.borderColor = "green";
    }
}

function copyAddrs() {
    var samaddrs = document.getElementById("samadd");
    if (samaddrs.checked) {
        if (permanentAddrsValid) {
            var perAddrs = document.getElementById("peraddrs");
            var tempAddrs = document.getElementById("tempaddrs");

            tempAddrs.value = perAddrs.value;
            temporaryAddrsValid = true;

            tempAddrs.style.borderColor = "green";
        }
    }
}

function resetFunction() {
    alert("RESET ALL DATA");

    document.getElementsByTagName("form").reset();
}

function validateForm() {
    // console.log(firstNameValid + "/" + lastNameValid + "/" + dateValid + "/" + mobileValid + "/" + emailValid + "/" + landlineValid + "/" + permanentAddrsValid + "/" + temporaryAddrsValid);
    if (firstNameValid && lastNameValid && dateValid && mobileValid && emailValid && landlineValid && permanentAddrsValid && temporaryAddrsValid) {
        var agree = document.getElementById("agree");
        if (agree.checked) {
            alert("ALL FIELDS ARE CORRECT..YOU ARE READY TO SUBMIT THE FORM");
            document.getElementsByTagName("form").submit();
        } else {
            alert("ACCEPTING ALL TERMS AND CONDITION IS MUST");
        }

    } else {

        alert("FEW FIELDS ARE WRONGLY ENTERED");

    }
}