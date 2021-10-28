function openProduct(productName) {
  var i;
  var x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(productName).style.display = "block";
}


