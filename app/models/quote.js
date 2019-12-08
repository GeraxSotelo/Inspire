export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }
  get Template() {
    return
  }
}