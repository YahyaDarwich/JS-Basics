function get_remainder() {
  var firstNumber = document.getElementById("first_number").value;
  var secondNumber = document.getElementById("second_number").value;
  var division = firstNumber / secondNumber;
  var remainder = firstNumber % secondNumber;
  document.write("<br/>The remainder is: " + remainder);
}
