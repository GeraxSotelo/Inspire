import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "https://pixabay.com/api/?key=1679424-bfa0f7d8060afa93165df72e8&safesearch=true&q=nature&per_page=100",
  timeout: 8000
});

//Create methods to retrieve data trigger the update window when it is complete
class ImageService {

  async getBgImageAsync() {
    try {
      let res = await imgApi.get();
      let rand = Math.floor(Math.random() * 101);
      let imgUrl = res.data.hits[rand].largeImageURL;
      store.commit("bgImage", imgUrl);
    } catch (err) {
      console.log(err);
    }
  }
}

const imageService = new ImageService();
export default imageService;
