function openProduct(productName) {
  var i;
  var x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(productName).style.display = "block";
}

document.forms.form.onsubmit = function () {
  let name = this.name.value;
  let email = this.email.value;
  let message = this.message.value;

  if (message == 0 || name == 0 || email == 0) {
    alert("Error! Please fill in all fields...");
    return 1;
  } else {
    alert("Thank you! Your message has been sent, please reply... :)");
  }
  console.log("You have a new message!\n" + "Name: " + name + "\n" + "Email: " + email + "\n" + "Message: " + message);
  return false;
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