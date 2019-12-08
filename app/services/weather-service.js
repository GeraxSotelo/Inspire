import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
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
