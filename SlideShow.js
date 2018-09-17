let images = ["./cats1.jpg", "./cats2.jpg"];
let currentImg = images[0];

document.getElementById("currentImg").src = currentImg;

function previous() {
  alert("Previous!");
}

function next() {
  alert("Next!");
}
