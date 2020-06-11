function imageR() {

    var img = document.createElement('image');
    img.src = "images/hi.gif";
    img.width = 16;
    img.height = 16;
    var divi = document.getElementByName("imge");
    divi.apendChild(img);
}