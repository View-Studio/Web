const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";



const saveList = function(text) {
  if (localStorage.getItem(TODOS_LS)) {
    localStorage.setItem(TODOS_LS, [localStorage.getItem(TODOS_LS), text]);
  } else {
    localStorage.setItem(TODOS_LS, text);
  }
}

//
const paintList = function(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  const toDoBtn = document.querySelectorAll("button");
  for (let i=0; i<toDoBtn.length; i++) {
    toDoBtn[i].addEventListener("click", toDoHandleClick);
  }
}


const toDoHandleSubmit = function(event) {
  event.preventDefault();
  currentListValue = toDoInput.value;
  saveList(currentListValue);
  toDoInput.value = "";
  paintList(currentListValue);
}


const toDoHandleClick = function(event) {
  const clickedBtn = event.target;
  const delTarget = clickedBtn.parentNode;
  const ul = delTarget.parentNode;
  ul.removeChild(delTarget);
  const localStorageList = localStorage.getItem(TODOS_LS).split(',');
  for (let i=0; i<localStorageList.length; i++) {
    if(localStorageList[i] === clickedBtn.nextSibling.innerText){
      localStorageList.splice(i, 1);
      localStorage.setItem(TODOS_LS, localStorageList);
    } else {

    }
  }
  if (Array.isArray(localStorageList) && localStorageList.length === 0) {
    localStorage.removeItem(TODOS_LS);
  }
}


const repeatList = function() {
  const localStorageLeng = localStorage.getItem(TODOS_LS).split(',').length;
  for (let i=0; i<localStorageLeng; i++) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = localStorage.getItem(TODOS_LS).split(',')[i];
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
  }
  const toDoBtn = document.querySelectorAll("button");
  for (let i=0; i<localStorageLeng; i++) {
    toDoBtn[i].addEventListener("click", toDoHandleClick);
  }
}


//
const loadToDos = function() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    repeatList();
  }
}


function init() {
  loadToDos();
  toDoForm.addEventListener("submit", toDoHandleSubmit);
}

init();
