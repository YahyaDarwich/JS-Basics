function over(x) {
  if (x.id == "image1") {
    x.src = "images/image1_2.jpg";
  } else if (x.id == "image2") {
    x.src = "images/image2_2.jpg";
  } else if (x.id == "image3") {
    x.src = "images/image3_2.jpg";
  } else if (x.id == "image4") {
    x.src = "images/image4_2.jpg";
  } else {
    x.src = "images/image5_2.jpg";
  }
}
function out(x) {
  if (x.id == "image1") {
    x.src = "images/image1.jpg";
  } else if (x.id == "image2") {
    x.src = "images/image2.jpg";
  } else if (x.id == "image3") {
    x.src = "images/image3.jpg";
  } else if (x.id == "image4") {
    x.src = "images/image4.jpg";
  } else {
    x.src = "images/image5.jpg";
  }
}
