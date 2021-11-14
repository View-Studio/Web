const form = document.querySelector(".js-form"),
      input = form.querySelector("input");
const greetingContainer = document.querySelector(".js-greeting"),
      greeting = greetingContainer.querySelector("h2");
const USER_LS = "currentUser",
      SHOWING_CN = "showing";


const saveName = function(text) {
  localStorage.setItem(USER_LS, text);
}


const greetHandleSubmit = function(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}



const askForName = function() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", greetHandleSubmit)
}



const paintGreeting = function(text) {
  form.classList.remove(SHOWING_CN);
  greetingContainer.classList.add(SHOWING_CN);
  greeting.innerText = `Hi! ${text}!`
}



const loadName = function() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}



function init() {
  loadName();
}

init();
