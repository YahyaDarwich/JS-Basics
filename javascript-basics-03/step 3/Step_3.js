function changeColor(x) {
  if (x == document.getElementById("green")) {
    document.getElementById("text").style.color = "green";
  } else if (x == document.getElementById("red")) {
    document.getElementById("text").style.color = "red";
  } else {
    document.getElementById("text").style.color = "blue";
  }
}
