import "babel-polyfill";
import { updateCityImage } from "../src/client";
import { updateCityInfo } from "../src/client";
import { updateWeatherInfo } from "../src/client";

test("updateCityImage",()=>{
    document.body.innerHTML='<img id="cityImage" src="">'
    expact(updateCityImage("123456")).toBeNull; 
})