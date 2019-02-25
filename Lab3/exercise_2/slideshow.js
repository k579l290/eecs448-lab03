var images = ["mn1.jpg", "mn2.jpg", "mn3.jpg", "mn4.jpg", "mn5.jpg"];
var i = 0;//index

function next() {
    i = i + 1;
    if (i == 5) {
        i = 0;
    }
    document.getElementById("images").src = images[i]; 
}

function previous() {
    i = i - 1;
    if (i == -1) {
        i = 4;
    }
    document.getElementById("images").src = images[i]; 
}