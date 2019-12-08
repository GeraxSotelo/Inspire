import QuoteService from "../services/quote-service.js";
import store from "../store.js"

function _drawQuote() {

}
export default class QuoteController {
  constructor() {
    store.subscribe("quote", _drawQuote)
    QuoteService.getQuoteAsync()
  }
}
