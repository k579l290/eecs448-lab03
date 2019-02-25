function validate() {
  let a = document.getElementById("myPsw").value;
  let b = document.getElementById("myPsw2").value;
  if ((a == b) && (a.length >=8 && b.length >= 8)) {
    alert("Password set");
  }
  else {
    if ((b.length < 8) || (a.length < 8)) {
      alert("At least one of the passwords are not at least 8 characters long");
    }
    if (a != b) {
      alert("The passwords do not match");
    }
  }
}
