// Get the button
let scrollBtn = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollBtn.addEventListener("click", scrollToTop);

// sign in and log out button

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

// contact sumbit button
// Selecting the form and the send button element
const form = document.getElementById("contactMeForm");
const sendBtn = document.getElementById("contactSendBtn");

// Adding a submit event listener to the form
form.addEventListener("submit", function (event) {
  // Preventing the form from submitting and refreshing the page
  event.preventDefault();

  // Getting the values of the form fields
  const fullName = document.getElementById("contactfullName").value;
  const email = document.getElementById("contactemail").value;
  const phone = document.getElementById("contactphone").value;
  const message = document.getElementById("contactmessage").value;

  // Validating the required fields
  if (!fullName || !email) {
    alert("Please fill out the required fields.");
    return;
  }

  // Disabling the send button and changing its text to "Sending..."
  sendBtn.disabled = true;
  sendBtn.innerText = "Sending...";

  // Creating a new FormData object and appending the form values to it
  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", message);

  // Sending a POST request to the server with the form data
  fetch("https://example.com/email.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      // Checking if the response is OK (status code between 200 and 299)
      if (response.ok) {
        // Showing a success message and resetting the form
        alert("Message sent successfully!");
        form.reset();
      } else {
        // Throwing an error if the response is not OK
        throw new Error("Something went wrong.");
      }
    })
    .catch((error) => {
      // Showing an error message and re-enabling the send button
      alert(error.message);
      sendBtn.disabled = false;
      sendBtn.innerText = "Send";
    });
});
