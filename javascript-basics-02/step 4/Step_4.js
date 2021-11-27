function reset_form() {
  var s = "";
  var response = confirm("Do you want to delete form?");
  if (response) {
    document.getElementById("name").value = s;
    document.getElementById("surname").value = s;
    document.getElementById("city").value = s;
  }
}
