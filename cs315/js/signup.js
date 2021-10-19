window.onload = function () {
  // localStorage.removeItem("users");
  let password = document.getElementById("password"),
    repassword = document.getElementById("repassword");
  let passw = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,14}$/;

  //page redirect
  function getData() {
    //gettting the values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("repassword").value;
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let role = document.querySelector('input[name="role"]:checked').value;

    //saving the values in local storage
    let users = JSON.parse(localStorage.getItem("users"));

    let newUser = [
      {
        email: email,
        password: password,
        firstName: fname,
        lastName: lname,
        gender: gender,
        role: role,
      },
    ];

    if (users == null || (users != null && users.length == 0)) {
      users = newUser;
    } else {
      users = users.concat(newUser);
    }

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "Login.html";
  }

  function validatTheInput() {
    if (!password.value.match(passw) || !repassword.value.match(passw)) {
      alert("enter vaild password please");
      return false;
    }

    return true;
  }

  document.getElementById("signup-form").onsubmit = function (e) {
    e.preventDefault();
    if (validatTheInput() && validatePassword()) {
      getData();
    }
  };

  function validatePassword() {
    if (password.value != repassword.value) {
      repassword.setCustomValidity("Your Passwords Don't Match");
      return false;
    } else {
      repassword.setCustomValidity("");
      return true;
    }
  }

  password.onchange = validatePassword;
  repassword.onkeyup = validatePassword;
};
