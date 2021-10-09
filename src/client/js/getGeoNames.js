const axios = require("axios").default;

const getGeoNames = async (apiKey, city, zip) => {
  const baseURL = "http://api.geonames.org/postalCodeSearchJSON?";
  const placename = `placename=${city}`;
  const postalCode = `&postalcode=${zip}`;
  const maxRows = "&maxRows=5";
  const userName = `&username=${apiKey}`;
  try {
    const res = await axios.get(
      baseURL + placename + postalCode + maxRows + userName
    );
    console.log("::: GeoNames Get :::", res);
    const data = {
      Name: res.data.postalCodes[0].placeName,
      lat: res.data.postalCodes[0].lat,
      lng: res.data.postalCodes[0].lng,
      admin1: res.data.postalCodes[0].adminName1,
      country: res.data.postalCodes[0].countryCode,
    };
    return data;
  } catch (error) {
    console.log("error", error);
    alert("Can not find this City! Please check the City Name or PostalCode");
  }
};

export { getGeoNames };
