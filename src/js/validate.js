let clientName = document.forms["vform"]["clientName"];
let email = document.forms["vform"]["email"];
let message = document.forms["vform"]["message"];

let clientName_error = document.getElementById("clientName_error");
let email_error = document.getElementById("email_error");
let message_error = document.getElementById("message_error");

clientName.addEventListener("blur", clientNameVerify, true);
email.addEventListener("blur", emailVerify, true);
message.addEventListener("blur", messageVerify, true);

function Validate() {
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

// validate message
if (message.value === "") {
  message_error.textContent = "Message is required";
  message.focus();
  return false;
}

if (message.value.length < 10) {
  message_error.textContent = "You must write a message";
  message.focus();
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

function messageVerify() {
  if (message.value !== "") {
    message_error.innerHTML = "";
    return true;
  }
}
