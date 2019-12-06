import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  async getBgImageAsync() {
    try {
      let res = await imgApi.get()
      store.commit("bgImage", res.data.url)
    } catch (err) {
      console.log(err);
    }
  }
}

const imageService = new ImageService();
export default imageService;
