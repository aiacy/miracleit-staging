// Contact Form
const fullName = document.getElementById("name");
const mailEl = document.getElementById("mail");
const companyName = document.getElementById("company");
const textArea = document.getElementById("textarea");
const sendBtn = document.getElementById("send");
const RegMail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

sendBtn.addEventListener("click", (e) => {
  if (fullName.value == "" || fullName.value == undefined) {
    fullName.style.border = "1px solid red";
    e.preventDefault();
  } else {
    fullName.style.border = "1px solid green";
  }

  if (mailEl.value == "" || mailEl.value == undefined) {
    mailEl.style.border = "1px solid red";
    e.preventDefault();
  } else if (!mailEl.value.match(RegMail)) {
    mailEl.style.border = "1px solid red";
    e.preventDefault();
  } else {
    mailEl.style.border = "1px solid green";
  }

  if (companyName.value == "" || companyName.value == undefined) {
    companyName.style.border = "1px solid red";
    e.preventDefault();
  } else {
    companyName.style.border = "1px solid green";
  }

  if (textArea.value == "" || textArea.value == undefined) {
    textArea.style.border = "1px solid red";
    e.preventDefault();
  } else {
    textArea.style.border = "1px solid green";
  }

  // These should return us to a backend server or a post request. This can be maintained later by the owner of the repo
});

// Email Subscription Button
const subButton = document.getElementById("button");
const inputEl = document.getElementById("email");
const buttonDisplay = document.getElementById("output");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

subButton.addEventListener("click", (e) => {
  if (inputEl.value == "" || inputEl.value == undefined) {
    buttonDisplay.innerText = "Please input your email";
    buttonDisplay.style.color = "red";
    e.preventDefault();
  } else if (!inputEl.value.match(RegEmail)) {
    buttonDisplay.innerText = "Please input a valid email";
    buttonDisplay.style.color = "red";
    e.preventDefault();
  } else {
    buttonDisplay.innerText = "Thank you for subscribing";
    buttonDisplay.style.color = "green";
  }
});
