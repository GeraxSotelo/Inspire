import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//Render data to the screen
function drawWeather() {
  document.getElementById("weather").innerHTML = store.State.weather.Template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeatherAsync();
  }
}
