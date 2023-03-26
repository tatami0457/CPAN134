function validateTxt() {
  // Get input values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const mark1 = document.getElementById("mark1").value;
  const mark2 = document.getElementById("mark2").value;
  const mark3 = document.getElementById("mark3").value;

  // Validate input values
  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const mark1Error = document.getElementById("mark1Error");
  const mark2Error = document.getElementById("mark2Error");
  const mark3Error = document.getElementById("mark3Error");

  if (firstName === "") {
    firstNameError.textContent = "Please enter a first name.";
  } else {
    firstNameError.textContent = "";
  }

  if (lastName === "") {
    lastNameError.textContent = "Please enter a last name.";
  } else {
    lastNameError.textContent = "";
  }

  if (mark1 === "" || mark1 < 0 || mark1 > 100) {
    mark1Error.textContent = "Please enter a valid mark1.";
  } else {
    mark1Error.textContent = "";
  }

  if (mark2 === "" || mark2 < 0 || mark2 > 100) {
    mark2Error.textContent = "Please enter a valid mark2.";
  } else {
    mark2Error.textContent = "";
  }

  if (mark3 === "" || mark3 < 0 || mark3 > 100) {
    mark3Error.textContent = "Please enter a valid mark3.";
  } else {
    mark3Error.textContent = "";
  }
}

function printResult() {
  // Get input values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const mark1 = parseInt(document.getElementById("mark1").value);
  const mark2 = parseInt(document.getElementById("mark2").value);
  const mark3 = parseInt(document.getElementById("mark3").value);

  // Calculate average and grade
  const average = (mark1 + mark2 + mark3) / 3;
  let grade = "";

  if (average >= 90) {
    grade = "Awesome";
  } else if (average >= 80) {
    grade = "Very Good";
  } else if (average >= 50) {
    grade = "OK";
  } else {
    grade = "Fail";
  }

  // Display result
  const resultElement = document.getElementById("result");
  resultElement.textContent = `${firstName} ${lastName} - Average: ${average.toFixed(
    2
  )} - Grade: ${grade}`;
}
