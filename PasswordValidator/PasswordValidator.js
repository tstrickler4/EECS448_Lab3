function validate() {
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;
  if (p1 != p2) {
    alert("Passwords do not match!");
  }
  else if (p1.length < 8) {
    alert("Password must have at least 8 characters!");
  }
  else {
    alert("Password is valid!");
  }
}
