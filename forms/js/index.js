const form = document.querySelector("form");

const email = document.querySelector("#mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", function () {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Enter an email address";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} character`;
  }
  emailError.className = "error active";
}
