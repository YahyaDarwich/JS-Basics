function results() {
  var shoeSize = document.getElementById("shoe_size").value;
  var birthYear = document.getElementById("year").value;
  var result = (shoeSize * 2 + 5) * 50 - birthYear + 1766;
  document.write("The final result is: " + result);
}
