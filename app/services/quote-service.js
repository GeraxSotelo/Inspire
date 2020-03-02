import store from "../store.js";
import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
  // baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  baseURL: "https://type.fit/api/quotes",
  timeout: 3000
});

class QuoteService {
  async getQuoteAsync() {
    try {
      let res = await _quoteApi.get();
      let rand = Math.floor(Math.random() * 1643)
      let quote = res.data[rand];
      store.commit("quote", new Quote(quote))
    } catch (err) {
      console.log(err)
    }
  }

  showAuthor() {
    document.querySelector("#quote").classList.add("translate-up")
    document.querySelector("#quote").classList.remove("translate-down")
    document.querySelector(".author").classList.add("visible")
  }

  hideAuthor() {
    document.querySelector("#quote").classList.add("translate-down")
    document.querySelector("#quote").classList.remove("translate-up")
    document.querySelector(".author").classList.remove("visible")
  }
}

const quoteService = new QuoteService();
export default quoteService;
