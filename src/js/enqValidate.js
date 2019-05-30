let establishment = document.forms["vform"]["establishment"];
let clientName = document.forms["vform"]["clientName"];
let email = document.forms["vform"]["email"];

let establishment_error = document.getElementById("establishment_error");
let clientName_error = document.getElementById("clientName_error");
let email_error = document.getElementById("email_error");

establishment.addEventListener("blur", establishmentVerify, true);
clientName.addEventListener("blur", clientNameVerify, true);
email.addEventListener("blur", emailVerify, true);

function Validate() {
  // validate establishment
  if (establishment.value === "") {
    establishment_error.textContent = "Client Name is required";
    establishment.focus();
    return false;
  }

  if (establishment.value.length < 2) {
    establishment_error.textContent =
      "Client Name must be at least 2 characters";
    establishment.focus();
    return false;
  }

  // validate clientName
  if (clientName.value === "") {
    clientName_error.textContent = "Client Name is required";
    clientName.focus();
    return false;
  }

  if (clientName.value.length < 2) {
    clientName_error.textContent = "Client Name must be at least 2 characters";
    clientName.focus();
    return false;
  }
}

// validate email
if (email.value === "") {
  email_error.textContent = "Email is required";
  email.focus();
  return false;
}

var regE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (regE.test(email.value)) {
} else {
  email_error.textContent = "Invalid email address";
  email.focus();
  return false;
}

// validate establishment
if (establishment.value === "") {
  establishment_error.textContent = "establishment is required";
  establishment.focus();
  return false;
}

if (establishment.value.length < 10) {
  establishment_error.textContent = "You must write a establishment";
  establishment.focus();
  return false;
}

// validate clientName
if (clientName.value === "") {
  clientName_error.textContent = "clientName is required";
  clientName.focus();
  return false;
}

if (clientName.value.length < 10) {
  clientName_error.textContent = "You must write a clientName";
  clientName.focus();
  return false;
}

//event handler - remove error msg when correct
function clientNameVerify() {
  if (clientName.value !== "") {
    clientName_error.innerHTML = "";
    return true;
  }
}

function emailVerify() {
  if (email.value !== "") {
    email_error.innerHTML = "";
    return true;
  }
}

function establishmentVerify() {
  if (establishment.value !== "") {
    establishment_error.innerHTML = "";
    return true;
  }
}
