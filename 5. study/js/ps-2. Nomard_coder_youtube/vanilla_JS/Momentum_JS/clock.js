const clockContainer = document.querySelector(".js-clockContainer"),
      clock = clockContainer.querySelector(".js-clock");

const updateTime = function() {
  const currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
  setInterval(updateTime, 1000);
}

init();
