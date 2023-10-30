const forms = document.querySelectorAll("form");
const formData = document.querySelector("#formData");
var submissionNumber = 0;

forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("Name").value;
  const regexName = /^[a-zA-Z]+\s?[a-zA-Z]*$/;

  const phone = document.getElementById("Phone").value;
  const regexPhone =
    /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

  const email = document.getElementById("Email").value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexName.test(name)) {
    alert(
      "Please enter a valid name (either First, Last, or both) that doesn't contain numbers or special characters",
    );
    return;
  }
  if (!regexEmail.test(email)) {
    alert("Invalid email address. Please enter a valid email address.");
    return;
  }
  if (phone != "" && !regexPhone.test(phone)) {
    alert("Invalid phone number. Please enter a valid US phone number.");
    return;
  }
  submissionNumber++;
  alert("Success");

  const header = document.createElement("h2");
  header.textContent = `Submission #${submissionNumber} Data:`;
  const list = document.createElement("ul");

  const nameData = document.createElement("li");
  nameData.textContent = name;
  list.appendChild(nameData);

  const emailData = document.createElement("li");
  emailData.textContent = email;
  list.appendChild(emailData);

  if (phone != "") {
    const phoneData = document.createElement("li");
    phoneData.textContent = phone;
    list.appendChild(phoneData);
  }

  formData.appendChild(header);
  formData.appendChild(list);
});

forms[1].addEventListener("submit", (e) => {
  e.preventDefault();

  const Fourtyniners = document.getElementById("49").checked;
  const Warriors = document.getElementById("Warriors").checked;
  const Giants = document.getElementById("Giants").checked;
  const Dodgers = document.getElementById("Dodgers").checked;
  const As = document.getElementById("A's").checked;
  const Sharks = document.getElementById("Sharks").checked;

  if (Dodgers == true) {
    alert("Incorrect");
  } else if (
    Fourtyniners == true &&
    Warriors == true &&
    Giants == true &&
    As == true &&
    Sharks == true
  ) {
    alert("Correct");
  } else if (
    Fourtyniners == true ||
    Warriors == true ||
    Giants == true ||
    As == true ||
    Sharks == true
  ) {
    alert("Partially correct");
  } else {
    alert("Choose something");
  }
});
