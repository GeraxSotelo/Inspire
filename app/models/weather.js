export default class Weather {
  constructor(data) {
    this.city = data.name
    this.tempInF = (data.main.temp - 273.15) * 9 / 5 + 32
    this.icon = data.weather.icon
  }

  get Template() {
    return `
      
      <h1>${this.tempInF}°F</h1>
      <h3>${this.city}</h3>
    `
  }

}
