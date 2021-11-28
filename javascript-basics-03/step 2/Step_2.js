function display(x) {
  if (x == document.getElementById("hide")) {
    document.getElementById("texte").style.display = "none";
  } else if (x == document.getElementById("show")){
    document.getElementById("texte").style.display = "block";
  }
}
