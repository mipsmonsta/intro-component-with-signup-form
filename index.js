window.onload = function () {
  console.log("Loaded");

  isEmpty = function (value) {
    if (value == "") {
      return true;
    } else {
      return false;
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

  validateActions = function (inputnode, clickFunction, msg, isError) {
    parentNode = inputnode.parentNode;
    paraSibling = parentNode.nextElementSibling;
    parentNode.onclick = clickFunction;
    console.log(inputnode, isError);
    if (isError === true) {
      inputnode.classList.add("error");
      parentNode.classList.add("error");
      paraSibling.classList.add("error");
      paraSibling.innerText = msg;
    } else {
      inputnode.classList.remove("error");
      parentNode.classList.remove("error");
      paraSibling.classList.remove("error");
      paraSibling.innerText = "";
    }
  };

  rightBtn = document.querySelector(".right__button");
  rightBtn.onclick = function () {
    firstName = document.querySelector("#first_name");
    lastName = document.querySelector("#last_name");
    password = document.querySelector("#password");
    email = document.querySelector("#email_addr");

    validateActions(
      email,
      resetVisibility,
      "Looks like this is not an email",
      !isEmail(email.value)
    );
    validateActions(
      lastName,
      resetVisibility,
      "Last Name cannot be empty",
      isEmpty(lastName.value)
    );
    validateActions(
      password,
      resetVisibility,
      "Password cannot be empty",
      isEmpty(password.value)
    );
    validateActions(
      firstName,
      resetVisibility,
      "First Name cannot be empty",
      isEmpty(firstName.value)
    );
  };
};
