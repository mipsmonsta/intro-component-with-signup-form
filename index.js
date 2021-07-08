window.onload = function () {
  console.log("Loaded");

  isEmpty = function (value) {
    if (value == "") {
      return true;
    }
  };

  isEmail = function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  rightBtn = document.querySelector(".right__button");
  rightBtn.onclick = function () {
    firstNameValue = document.querySelector("#first_name").value;
    firstNameErr = document.querySelector(".firstname--err");
    lastNameValue = document.querySelector("#last_name").value;
    lastNameErr = document.querySelector(".lastname--err");
    passwordValue = document.querySelector("#password").value;
    passwordErr = document.querySelector(".password--err");
    emailValue = document.querySelector("#email_addr").value;
    emailErr = document.querySelector(".email--err");
    if (!isEmail(emailValue)) {
      emailErr.innerText = "Looks like this is not an email";
      emailErr.classList.add("error");
    } else {
      emailErr.classList.remove("error");
      emailErr.innerText = "";
    }

    if (isEmpty(firstNameValue)) {
      firstNameErr.innerText = "First Name cannot be empty";
      firstNameErr.classList.add("error");
    } else {
      firstNameErr.classList.remove("error");
      firstNameErr.innerText = "";
    }

    if (isEmpty(lastNameValue)) {
      lastNameErr.innerText = "Last Name cannot be empty";
      lastNameErr.classList.add("error");
    } else {
      lastNameErr.classList.remove("error");
      lastNameErr.innerText = "";
    }

    if (isEmpty(passwordValue)) {
      passwordErr.innerText = "Password cannot be empty";
      passwordErr.classList.add("error");
    } else {
      passwordErr.classList.remove("error");
      passwordErr.innerText = "";
    }
  };
};
