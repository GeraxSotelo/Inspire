export default class Quote {
  constructor(data) {
    this.quote = data.text
    this.author = data.author
  }
  get Template() {
    return `
        <h4>${this.quote}</h4>
        <h5 class="author">-${this.author}-</h5>
        <i id="next-quote-btn" class="fas fa-chevron-circle-right pl-2" title="Next Quote" onclick="app.quoteController.nextQuote()"></i>
      `
  }
}