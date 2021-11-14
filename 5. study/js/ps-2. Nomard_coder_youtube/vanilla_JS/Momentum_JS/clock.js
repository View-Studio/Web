const clockContainer = document.querySelector(".js-clock"),
      clock = clockContainer.querySelector("h1");




const getTime = function() {
  const currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}




function init() {
  setInterval(getTime, 1000);
}

init();
