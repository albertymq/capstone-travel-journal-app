//import js files
import { saveAction } from "./js/saveAction";
import { removeAction } from "./js/removeAction";
import { getApiKey } from "./js/getApiKey";
import { getPicture } from "./js/getPicture";
import { updateCityImage } from "./js/updateCityImage";
import { getGeoNames } from "./js/getGeoNames";
import { updateCityInfo } from "./js/updateCityInfo";
import { getWeather } from "./js/getWeather";
import { updateWeatherInfo } from "./js/updateWeatherInfo";
import "axios";

//import Styles
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/input.scss";
import "./styles/main.scss";

import defaultImg from "./media/Default.jpg";

/*** ***/
//When running jest test, please block out this code block to avoid test import failure
//import images
let cityImage = document.getElementById("cityImage");
cityImage.src = defaultImg;
//add event listener to Save Button
document.getElementById("save").addEventListener("click", saveAction);
document.getElementById("remove").addEventListener("click", removeAction);
/*** ***/

export {
  saveAction,
  removeAction,
  getApiKey,
  getPicture,
  updateCityImage,
  getGeoNames,
  updateCityInfo,
  getWeather,
  updateWeatherInfo,
};
