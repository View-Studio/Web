const COORDS = "coords";


const handleGeoSucces = function(position) {
  console.log(position);
}


const handleGeoError = function() {
  console.log("Error! Can't access geo location.")
}


const askForCoords = function() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


const loadCoords = function() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather Function
  }
}


function init() {
  loadCoords();
}

init();
