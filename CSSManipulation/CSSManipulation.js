function updateCSS() {
  let borderRed = document.getElementById("borderRed").value;
  let borderGreen = document.getElementById("borderGreen").value;
  let borderBlue = document.getElementById("borderBlue").value;
  let borderWidth = document.getElementById("borderWidth").value;
  let backgroundRed = document.getElementById("backgroundRed").value;
  let backgroundGreen = document.getElementById("backgroundGreen").value;
  let backgroundBlue = document.getElementById("backgroundBlue").value;
    
  if (borderRed < 0 || borderRed > 255 || borderGreen < 0 || borderGreen > 255 || borderBlue < 0 || borderBlue > 255 || backgroundRed < 0 || backgroundRed > 255 || backgroundGreen < 0 || backgroundGreen > 255 || backgroundBlue < 0 || backgroundBlue > 255) {
    alert("Color values must be in range 0-255.");
  }
  else if (!["thin", "medium", "thick"].includes(borderWidth.toLowerCase())) {
    alert("Border width must be set to either thin, medium, or thick.");
  }
  else {
    let text = document.getElementById("text");

    text.style.borderColor = `rgb(${borderRed}, ${borderGreen}, ${borderBlue})`;
    text.style.borderWidth = `${borderWidth}`.toLowerCase();
    text.style.backgroundColor = `rgb(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue})`;
  }
}
