const axios = require("axios").default;

const getWeather = async (apiKey, lat, lon, forecastdays) => {
  const baseUrl = "http://api.weatherbit.io/v2.0/forecast/daily?key=";
  const latlon = `&lat=${lat}&lon=${lon}`;
  const days = `&days=${forecastdays}`;
  try {
    const res = await axios.get(baseUrl + apiKey + latlon + days);
    console.log("::: Weather Get :::", res);
    console.log(days);
    let arrynum = Number(forecastdays) - Number("1");
    console.log(arrynum);
    const data = {
      high: res.data.data[arrynum].high_temp,
      low: res.data.data[arrynum].low_temp,
      wspd: res.data.data[arrynum].wind_spd,
      wdir: res.data.data[arrynum].wind_cdir_full,
      overall: res.data.data[arrynum].weather.description,
    };
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { getWeather };
