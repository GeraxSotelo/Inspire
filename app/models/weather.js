export default class Weather {
  constructor(data) {
    this.city = data.name
    this.tempInF = Math.round((data.main.temp - 273.15) * 9 / 5 + 32)
    this.icon = data.weather[0].icon
  }

  get Template() {
    return `
      <image src="http://openweathermap.org/img/wn/${this.icon}.png"></image>
      <h1 class="d-inline-block mb-0">${this.tempInF}°F</h1>
      <h3>${this.city}</h3>
    `
  }

}
