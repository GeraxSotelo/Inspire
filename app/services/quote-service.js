import store from "../store.js";
import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

class QuoteService {
  async getQuoteAsync() {
    try {
      let res = await _quoteApi.get()
      store.commit("quote", new Quote(res.data.quote))
    } catch (err) {
      console.log(err)
    }
  }

  showAuthor() {
    document.querySelector("#quote").classList.add("translate")
    document.querySelector(".author").classList.add("visible")
  }

  hideAuthor() {
    document.querySelector("#quote").classList.remove("translate")
    document.querySelector(".author").classList.remove("visible")
  }
}

const quoteService = new QuoteService();
export default quoteService;
