let images = ["cats1.jpg", "cats2.jpg", "cats3.jpg", "cats4.jpg", "cats5.jpg",];
let idx = 0;

function previous() {
  if (idx == 0) { idx = images.length - 1; }
  else { idx--; }
  document.getElementById("currentImg").setAttribute("src", images[idx]);
}

function next() {
  if (idx == images.length - 1) { idx = 0; }
  else { idx++; }
  document.getElementById("currentImg").setAttribute("src", images[idx]);
}
