import QuoteService from "../services/quote-service.js";
import store from "../store.js"

function _drawQuote() {
  document.getElementById("quote").innerHTML = store.State.quote.Template

}
export default class QuoteController {
  constructor() {
    store.subscribe("quote", _drawQuote)
    QuoteService.getQuoteAsync()
  }

  showAuthor() {
    QuoteService.showAuthor()
  }

  hideAuthor() {
    QuoteService.hideAuthor()
  }

  nextQuote() {
    QuoteService.getQuoteAsync()
  }
}
