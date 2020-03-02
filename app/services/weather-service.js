import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?lat=43.6135002&lon=-116.2034505&appid=fcb38c99a81c13ba38e4e647423ae0a1",
  timeout: 3000
});

class WeatherService {
  async getWeatherAsync() {
    try {
      let res = await weatherApi.get();
      store.commit("weather", new Weather(res.data));
    } catch (err) {
      console.log(err);
    }
  }
}

const weatherService = new WeatherService();
export default weatherService;
