// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

class QuoteService {
  async getQuoteAsync() {
    try {
      let res = await _quoteApi.get()
      console.log(res.data.quote.body);

    } catch (err) {
      console.log(err)
    }
  }
}

const quoteService = new QuoteService();
export default quoteService;
