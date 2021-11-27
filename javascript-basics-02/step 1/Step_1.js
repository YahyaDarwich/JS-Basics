var img = document.querySelector("image1");
    var start = img.src;
    var hover = "images/image1_2.jpg";

    img.onmouseover = function() { img.src = hover; }
    img.onmouseout = function() { img.src = start; }