const model = document.querySelector(".model");
const signinbutton = document.querySelector("#signInButton");
const logoutbutton = document.querySelector("#logOutButton");
const span = document.querySelector("#closeButton");
const submitbutton = document.querySelector("#submitButton");
const clearbutton = document.querySelector("#clearButton");
const helloSpan = document.querySelector(".helloSpan");

// When the user clicks the button, open the model
signinbutton.addEventListener("click", function () {
  model.style.display = "block";
});

// When the user clicks on <span> (x), close the model
span.addEventListener("click", function () {
  model.style.display = "none";
});

// When the user clicks anywhere outside of the model, close it
window.addEventListener("click", function (event) {
  if (event.target == model) {
    model.style.display = "none";
  }
});

// When the user clicks the submit button, show an alert with the form values
submitbutton.addEventListener("click", function () {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const phone = document.querySelector("#phone").value;
  let errorMessage = "";

  if (email === "") {
    errorMessage += "Email is required.\n";
  }
  if (password === "") {
    errorMessage += "Password is required.\n";
  }
  if (lastName === "") {
    errorMessage += "Last name is required.\n";
  }
  if (phone === "") {
    errorMessage += "Phone number is required.\n";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
    return;
  }

  alert(
    "Email: " +
      email +
      "\nPassword: " +
      password +
      "\nFirst Name: " +
      firstName +
      "\nLast Name: " +
      lastName +
      "\nPhone Number: " +
      phone
  );

  // show logout button
  logoutbutton.style.display = "inline-block";

  // update hello span with last name
  helloSpan.style.display = "block";
  helloSpan.innerHTML = `<strong>Hello ${lastName}</strong>`;

  // close the model
  model.style.display = "none";
});

// When the user clicks the clear button, clear all input fields
clearbutton.addEventListener("click", function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
});

// When the user clicks the button, open the model
logoutbutton.addEventListener("click", function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
  logoutbutton.style.display = "none";
  signinbutton.style.display = "inline-block";
  helloSpan.style.display = "none";
});
