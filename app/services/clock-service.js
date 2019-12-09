

class ClockService {
  showTime() {
    let greeting = "Good "
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    h < 10 ? h = '0' + h : h
    m < 10 ? m = '0' + m : m
    h < 12 ? greeting += "Morning" : h < 17 ? greeting += "Afternoon" : greeting += "Evening"
    document.querySelector("#time").innerText = `${h}:${m}`
    document.querySelector("#greeting").innerText = greeting
    let t = setInterval(this.showTime, 500)
  }

}

const clockService = new ClockService()
export default clockService