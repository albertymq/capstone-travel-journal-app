const updateCityInfo = (city, adminName, country) => {
  document.getElementById(
    "cityInfo"
  ).innerHTML = `City Info: ${city} is a city under the admin of ${adminName} in ${country}`;
};

export { updateCityInfo };
