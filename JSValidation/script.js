function u_name_validation() {
    validateName();
    validateEmail();
    validateNumber();
    validatePassword();
  }
  
  function validateName() {
    let x = document.forms["form"]["uname"].value;
    if (x == null || x == "" || x.length > 25) {
      alert("Please enter a valid User name");
      return false;
    }
  }
  
  function validateEmail() {
    var x = document.forms["form"]["email"].value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (
      atposition < 1 ||  dotposition < atposition + 2 ||  dotposition + 2 >= x.length) {
      alert("Please enter a valid e-mail address"); // \n atpostion:"+ atposition+ "\n dotposition:" + dotposition
      return false;
    }
  }
  
  function validateNumber() {
    var x = document.forms["form"]["mobile_no"].value;
    if (x.length < 10 || x.length > 11 || x.indexOf("0") == 0) {
      alert("Please enter a valid contact number");
      return false;
    }
  }
  
  function validatePassword() {
    validateConfirmPassword();
  }
  
  function validateConfirmPassword() {
    var password = document.forms["form"]["password"].value;
    var confirmPassword = document.forms["form"]["c_password"].value;
  
    if (confirmPassword !== password) {
      alert("Invalid password");
      return false;
    }
  }
  