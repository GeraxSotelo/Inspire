export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }
  get Template() {
    return `
        <h4>${this.quote}</h4>
        <p class="author"><b>-${this.author}-</b></p>
      `
  }
}