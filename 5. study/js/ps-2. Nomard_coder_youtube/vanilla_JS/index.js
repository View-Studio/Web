// function part
function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years of old`);
}


// object part
const calculator = {
  plus: function(num1, num2) {
    return num1 + num2;
  },
  minus: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  division: function(num1, num2) {
    return num1 / num2;
  },
  squared: function(num1, num2) {
    return num1 ** num2;
  }
}


// DOM object part
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(240, 172, 142)";
const OTHER_COLOR = "rgb(229, 215, 243)";

function init() {
  title.style.color = "black";
  title.addEventListener('click', handleClick);
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);
}
init();

function handleClick() {
  const currentColor = title.style.color;

  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  }
  else {
    title.style.color = BASE_COLOR;
  }
}

function handleOnline() {
  console.log("This online!");
}

function handleOffline() {
  console.log("This offline!");
}



const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS)
  // }
  // else {
  //   title.classList.add(CLICKED_CLASS)
  // }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
