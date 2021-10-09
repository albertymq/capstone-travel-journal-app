import "babel-polyfill";
import axios from "axios";
import { getApiKey } from "../src/client";
import { getPicture } from "../src/client";
import { getGeoNames } from "../src/client";
import { getWeather } from "../src/client";

jest.mock("axios");

test("getApiKey", () => {
  const data = { apikey: "123" };
  axios.get.mockResolvedValue(data);
  expect(getApiKey()).toBeNull;
});

test("getPicture", () => {
  const data = { apikey: "123" };
  axios.get.mockResolvedValue(data);
  expect(getPicture("123", "Paris")).toBeNull;
});

test("getWeather", () => {
  const data = { apikey: "123" };
  axios.get.mockResolvedValue(data);
  expect(getWeather("123", "123", "123", 4)).toBeNull;
});

test("getGeoNames", () => {
  const data = { apikey: "123" };
  axios.get.mockResolvedValue(data);
  expect(getGeoNames("123", "Sydney", "2001")).toBeNull;
});
