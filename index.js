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

  resetVisibility = function () {
    secondChild = this.children[1];
    paraSibling = this.nextElementSibling;
    // console.log(secondChild, paraSibling);
    this.classList.remove("error");
    secondChild.classList.remove("error");
    paraSibling.innerText = "";
    secondChild.focus();
  };

  rightBtn = document.querySelector(".right__button");
  rightBtn.onclick = function () {
    firstName = document.querySelector("#first_name");
    firstNameErr = document.querySelector(".firstname--err");
    lastName = document.querySelector("#last_name");
    lastNameErr = document.querySelector(".lastname--err");
    password = document.querySelector("#password");
    passwordErr = document.querySelector(".password--err");
    email = document.querySelector("#email_addr");
    emailErr = document.querySelector(".email--err");
    if (!isEmail(email.value)) {
      emailErr.innerText = "Looks like this is not an email";
      ierror = email.parentNode;
      ierror.onclick = resetVisibility;
      ierror.classList.add("error");
      email.classList.add("error");
    } else {
      ierror.classList.remove("error");
      email.classList.remove("error");
      emailErr.innerText = "";
    }

    if (isEmpty(firstName.value)) {
      firstNameErr.innerText = "First Name cannot be empty";
      ierror = firstName.parentNode;
      ierror.onclick = resetVisibility;
      firstName.classList.add("error");
      ierror.classList.add("error");
    } else {
      ierror.classList.remove("error");
      firstName.classList.remove("error");
      firstNameErr.innerText = "";
    }

    if (isEmpty(lastName.value)) {
      lastNameErr.innerText = "Last Name cannot be empty";
      ierror = lastName.parentNode;
      ierror.onclick = resetVisibility;
      lastName.classList.add("error");
      ierror.classList.add("error");
    } else {
      ierror.classList.remove("error");
      lastName.classList.remove("error");
      lastNameErr.innerText = "";
    }

    if (isEmpty(password.value)) {
      passwordErr.innerText = "Password cannot be empty";
      ierror = password.parentNode;
      ierror.onclick = resetVisibility;
      password.classList.add("error");
      ierror.classList.add("error");
    } else {
      ierror.classList.remove("error");
      password.classList.remove("error");
      passwordErr.innerText = "";
    }
  };
};
