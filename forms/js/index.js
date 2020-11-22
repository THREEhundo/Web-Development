const form = document.querySelector("form");

const email = document.querySelector("#mail");
const emailError = document.querySelector("#mail + span.error");

const selectCountry = document.querySelector("#country");
const selectCountryError = document.querySelector("#country + span.error");

const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + span.error");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");

const passwordConfirmation = document.querySelector("#password-confirmation");
const passwordConfirmationError = document.querySelector(
  "#password-confirmation + span.error"
);

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Côte d'Ivoire",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// Form Validation & error message
form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    showEmailError();
  } else if (!selectCountry.validity.valid) {
    showCountryError();
  } else if (!zip.validity.valid) {
    showZipError();
  } else if (!password.validity.valid) {
    showPasswordError();
  } else if (!passwordConfirmation.validity.valid) {
    passwordMismatch();
  }
  event.preventDefault();
});

// Email Reset Error message on correct input
email.addEventListener("input", function () {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showEmailError();
  }
});

// Validation properties for email
function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Enter an email address";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} character`;
  }
  emailError.className = "error active";
}

// Validation Reset Error message on correct input
selectCountry.addEventListener("input", function (event) {
  if (selectCountry.validity.valid) {
    selectCountryError.innerHTML = "";
    selectCountryError.className = "error";
  } else {
    showCountryError();
    event.preventDefault();
  }
});

// Validation properties for country selection
function showCountryError() {
  if (selectCountry.validity.valueMissing) {
    selectCountryError.textContent = "Select a Country";
  }
  selectCountryError.className = "error active";
}

zip.addEventListener("input", function () {
  if (zip.validity.valid) {
    zipError.innerHTML = "";
    zipError.className = "error";
  } else {
    showZipError();
  }
});

// Validation property for Zip Code selection
function showZipError() {
  const fiveDigits = "Enter 5 digits";
  if (zip.validity.patternMismatch) {
    zipError.textContent = fiveDigits;
    console.log(`under`);
  }
  zipError.className = "error active";
}

password.addEventListener("input", function () {
  if (password.validity.valid) {
    passwordError.innerHTML = "";
    passwordError.className = "error";
  } else {
    showPasswordError();
  }
});

function showPasswordError() {
  if (password.validity.patternMismatch) {
    passwordError.textContent =
      "Password needs to be 8 characters long, 1 number, 1 uppercase and 1 lowercase letter.";
  }
  passwordError.className = "error active";
}

passwordConfirmation.addEventListener("input", function () {
  if (passwordConfirmation.validity.valid) {
    passwordConfirmationError.innerHTML = "";
    passwordConfirmationError.className = "error";
  } else {
    passwordMismatch();
  }
});

function passwordMismatch() {
  if (password.value != passwordConfirmation.value) {
    passwordConfirmationError.textContent = "Passwords do not match";
  } else if (passwordConfirmation.validity.patternMismatch) {
    passwordConfirmationError.textContent =
      "Password needs to be 8 characters long, 1 number, 1 uppercase and 1 lowercase letter.";
  }
  passwordConfirmationError.className = "error active";
}

// Creating options for countries select element
const placeholder = () => {
  const option = document.createElement("option");
  option.innerHTML = "Select a Country";
  option.value = "";
  selectCountry.appendChild(option);
};

placeholder();

countries.forEach((country) => {
  const option = document.createElement("option");
  option.innerHTML = country;
  option.value = country.toLowerCase();

  selectCountry.appendChild(option);
});
