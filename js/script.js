function openProduct(productName) {
  var i;
  var x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(productName).style.display = "block";
}

$(document).on('click', '[data-toggle="modal"]', function () {
  var target = $(this).attr('data-target');
  console.log(target);
  $(target).addClass('show');
  return false;
});

$('.modal .close').on('click', function () {
  $(this).closest('.modal').removeClass('show');
  return false;
})

$(function(){
  $("#includedContent").load("footer.html"); 
  $("#includedForm").load("footer-form.html"); 
});


window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}