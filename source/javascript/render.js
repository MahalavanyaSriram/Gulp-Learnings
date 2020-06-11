function getName() {
    var user = document.getElementById("user").value;
    console.log(user);
    document.getElementById("name").innerHTML = "dear" + " " + user + " " + "we invite you to our page";
}