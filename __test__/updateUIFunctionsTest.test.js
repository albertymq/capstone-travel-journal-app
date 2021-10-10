import "babel-polyfill";
import { updateCityImage } from "../src/client";
import { updateCityInfo } from "../src/client";
import { updateWeatherInfo } from "../src/client";


test("updateCityImage", () => {
  document.body.innerHTML = '<img id="cityImage" src="">';
  expect(updateCityImage("123456")).toBeNull;
});

test("updateCityInfo", () => {
  document.body.innerHTML = '<div id="cityInfo">';
  expect(updateCityInfo("Sydney", "NSW", "AU")).toBeNull;
});

test("updateWeatherInfo", () => {
  document.body.innerHTML =
    '<div id="high"></div>' +
    '<div id="low"></div>' +
    '<div id="Wind"></div>' +
    '<div id="description"></div>';
  expect(updateWeatherInfo(1, 2, 3, "west", "Good Weather")).toBeNull;
});
