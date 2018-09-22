function updateCSS()
{
  let borderRed = document.getElementById("borderRed").value;
  let borderGreen = document.getElementById("borderGreen").value;
  let borderBlue = document.getElementById("borderBlue").value;
  let borderWidth = document.getElementById("borderWidth").value;
  let backgroundRed = document.getElementById("backgroundRed").value;
  let backgroundGreen = document.getElementById("backgroundGreen").value;
  let backgroundBlue = document.getElementById("backgroundBlue").value;

  let text = document.getElementById("text");

  text.style.borderColor = `rgb(${borderRed}, ${borderGreen}, ${borderBlue})`;
  text.style.borderWidth = `${borderWidth}`.toLowerCase();
  text.style.backgroundColor = `rgb(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue})`;
}
