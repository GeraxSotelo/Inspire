import ClockService from "../services/clock-service.js"

export default class ClockController {
  constructor() {
    ClockService.showTime()
  }
}