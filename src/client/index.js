//import js files
import { saveAction } from "./js/saveAction";
import { removeAction } from "./js/removeAction";
import { getApiKey } from "./js/app";
import "axios";

//import Styles
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/input.scss";
import "./styles/main.scss";

//import images
import defaultImg from "./media/Default.jpg";
let cityImage = document.getElementsByClassName("cityImage");
cityImage.src = defaultImg;


//add event listener to Save Button
document.getElementById("save").addEventListener("click", saveAction);
document.getElementById("remove").addEventListener("click", removeAction);

export { saveAction, removeAction, getApiKey };
