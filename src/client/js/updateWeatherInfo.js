const updateWeatherInfo = (high, low, wspd, wdir, overall) => {
  document.getElementById("high").innerHTML = `High Temp: ${high}`;
  document.getElementById("low").innerHTML = `Low Temp: ${low}`;
  document.getElementById(
    "Wind"
  ).innerHTML = `Wind Speed: ${wspd}, Direction: ${wdir}`;
  document.getElementById("description").innerHTML = `Description: ${overall}`;
};

export { updateWeatherInfo };
