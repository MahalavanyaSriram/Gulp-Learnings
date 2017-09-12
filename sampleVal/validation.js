var nameValid = /^[A-Za-z]{5,20}$/;
var dateValid = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
var space = /^[ ]+\S*$/;
var number = /^[0-9]+$/;
var emailValid = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var validfName = false;
var validlName = false;
var validDate = false;
var validMobile = false;
var validEmail = false;
var checked = false;
var button1 = document.getElementById("button1");
button1.disabled = true;
var submitForm = document.getElementById("mybutton");
submitForm.disabled = true;
function fnameValidation(){
	var firstname = document.getElementById("firstname");
	var fname = document.getElementById("valfname");
	if(firstname.value.length < 5){
		validfName = false;
		fname.style.display ="block";
		fname.textContent="Enter atleast 5 characters";
		firstname.style.borderColor = "red";
		validateForm();
	}else if(nameValid.test(firstname.value)==false){
		validfName = false;
		fname.style.display ="block";
		fname.textContent="Pattern mismatch";
		firstname.style.borderColor = "red";
		validateForm();
	}
	else{
		validfName = true;
		fname.style.display ="";
		firstname.style.borderColor = "green";
		fname.textContent = "";
		validateForm();
	}
}
function lnameValidation(){
	var lastname = document.getElementById("lastname");
	var lname = document.getElementById("vallname");
	if(lastname.value.length < 5){
		validlName = false;
		lname.style.display ="block";
		lname.textContent="Enter atleast 5 characters";
		lastname.style.borderColor = "red";
		validateForm();
	}else if(nameValid.test(lastname.value)==false){
		validlName = false;
		lname.style.display ="block";
		lname.textContent="Pattern mismatch";
		lastname.style.borderColor = "red";
		validateForm();
	}
	else{
		validlName = true;
		lname.style.display ="";
		lastname.style.borderColor = "green";
		lname.textContent = "";
		validateForm();
	}
}
function checkedValue(){
	checked = true;
	console.log(mradio);
	validateForm();
}
function dateValidation(){
	var date = document.getElementById("dob");
	var datespan = document.getElementById("validdob");
	var year = parseInt(date.value.slice(0,4));
	var month = parseInt(date.value.slice(5,7));
	var day = parseInt(date.value.slice(8,10));
	if(date.value.length < 1){
		validDate = false;
		datespan.style.display ="block";
		datespan.textContent="Date can't be empty";
		date.style.borderColor = "red";
		validateForm();
	}else if(dateValid.test(date.value)==false){
		validDate = false;
		datespan.style.display ="block";
		datespan.textContent="Enter date in yyyy-mm-dd format";
		date.style.borderColor = "red";
		validateForm();
	}else if(year<1990||year>2000){
		validDate = false;
		datespan.style.display ="block";
		datespan.textContent="year must be between 1990 to 2000";
		date.style.borderColor = "red";
		validateForm();
	}else if(month<1||month>12){
		validDate = false;
		datespan.style.display ="block";
		datespan.textContent="month value must be between 1 to 12";
		date.style.borderColor = "red";
		validateForm();
	}else if(day<1||day>31){
		validDate = false;
		datespan.style.display ="block";
		datespan.textContent="day value must be between 1 to 31";
		date.style.borderColor = "red";
		validateForm();
	}
	else{
		validDate = true;
		datespan.style.display ="";
		date.style.borderColor = "green";
		datespan.textContent = "";
		validateForm();
	}
}
function mobileValidation(){
	var mobile = document.getElementById("mobile");
	var mobilespan = document.getElementById("validmobile");
	var start = parseInt(mobile.value.slice(0,1));
	if(!mobile.value){
		validMobile = false;
		mobilespan.style.display ="block";
		mobilespan.textContent="mobile number can't be empty";
		mobile.style.borderColor = "red";
		validateForm();
	}else if(space.test(mobile.value)){
		validMobile = false;
		mobilespan.style.display ="block";
		mobilespan.textContent="Remove the spaces from biggining";
		mobile.style.borderColor = "red";
		validateForm();
	}else if(!number.test(mobile.value)){
		validMobile = false;
		mobilespan.style.display ="block";
		mobilespan.textContent="Enter only numbers";
		mobile.style.borderColor = "red";
		validateForm();
	}else if(start<7){
		validMobile = false;
		mobilespan.style.display ="block";
		mobilespan.textContent="First number must be 7,8 or 9";
		mobile.style.borderColor = "red";
		validateForm();
	}else if(mobile.value.length < 10 || mobile.value.length >10){
		validMobile = false;
		mobilespan.style.display ="block";
		mobilespan.textContent="Length must be 10";
		mobile.style.borderColor = "red";
		validateForm();
	}else{
		validMobile = true;
		mobilespan.style.display ="";
		mobilespan.textContent="";
		mobile.style.borderColor = "green";
		validateForm();
	}
}
function emailValidation(){
	var email = document.getElementById("email");
	var emailspan = document.getElementById("validemail");
	var start = parseInt(mobile.value.slice(0,1));
	if(!email.value){
		validEmail = false;
		emailspan.style.display ="block";
		emailspan.textContent="email can't be empty";
		email.style.borderColor = "red";
		validateForm();
	}else if(space.test(email.value)){
		validEmail = false;
		emailspan.style.display ="block";
		emailspan.textContent="Remove the spaces from biggining";
		email.style.borderColor = "red";
		validateForm();
	}else if(!emailValid.test(email.value)){
		validEmail = false;
		emailspan.style.display ="block";
		emailspan.textContent="Pattern mismatch";
		email.style.borderColor = "red";
		validateForm();
	}else{
		validEmail = true;
		emailspan.style.display ="";
		emailspan.textContent="";
		email.style.borderColor = "green";
		validateForm();
	}
}
function validateForm(){
	if(validfName&&validlName&&validDate&&validMobile&&validEmail&&checked){
		submitForm.disabled = false;
		button1.disabled = false;
	}else{
		submitForm.disabled = true;
		button1.disabled = true;
	}
}