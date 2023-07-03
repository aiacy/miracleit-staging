const toggleButton = document.getElementById("Transformation");
const displayDiv = document.getElementById("push");

let isOn = true;

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (isOn) {
    displayDiv.style.setProperty("display", "block");
    isOn = !isOn;
  } else {
    displayDiv.style.setProperty("display", "none");
    isOn = !isOn;
  }
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
