import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawBgImage() {
  let body = document.getElementById("bg-image")
  body.style.background = `#333 url(${store.State.bgImage}) no-repeat center`
  body.style.backgroundSize = "cover"
}

export default class ImageController {
  constructor() {
    store.subscribe("bgImage", _drawBgImage)
    ImageService.getBgImageAsync()
  }
}
