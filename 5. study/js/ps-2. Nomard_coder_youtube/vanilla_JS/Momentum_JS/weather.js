const todayWeather = document.querySelector(".js-weather"),
      todayWeatherIcon = todayWeather.querySelector("i"),
      todayTemp = todayWeather.querySelector(".temperature"),
      curretPlace = todayWeather.querySelector(".place");

const API_KEY = "0be1ea5b5b327afab7882ea920e7ec5e";
const COORDS = "coords";


const getWeather = function(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then((response) => {return response.json()})
    .then((json) => {
      const temp = json.main.temp;
      const place = json.name;
      const weather = json.weather[0].main;
      const weatherId = json.weather[0].id;
      if (weatherId>=200 && weatherId<300) {
        todayWeatherIcon.classList.add('fas', 'fa-bolt');
      }
      else if (weatherId>=300 && weatherId<400) {
        todayWeatherIcon.classList.add('fas', 'fa-cloud-showers-heavy');
      }
      else if (weatherId>=500 && weatherId<600) {
        todayWeatherIcon.classList.add('fas', 'fa-umbrella');
      }
      else if (weatherId>=600 && weatherId<700) {
        todayWeatherIcon.classList.add('fas', 'fa-snowflake');
      }
      else if (weatherId>=700 && weatherId<800) {
        todayWeatherIcon.classList.add('fas', 'fa-smog');
      }
      else if (weatherId===800) {
        todayWeatherIcon.classList.add('fas', 'fa-sun');
      }
      else if (weatherId>=801 && weatherId<900) {
        todayWeatherIcon.classList.add('fas', 'fa-cloud');
      }
      todayTemp.innerText = `${temp}°`;
      curretPlace.innerText = `${place}`;
    });
}


const saveCoords = function(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}


const handleGeoSucces = function(position) {
  const latitude = position.coords.latitude;  // 위도
  const longitude = position.coords.longitude;  // 경도
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
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
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}


function init() {
  loadCoords();
}

init();
