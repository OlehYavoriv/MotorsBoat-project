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
  };
  