const axios = require("axios").default;

const getPicture = async (apiKey, city) => {
  const basUrl = "https://pixabay.com/api/?key=";
  const orit = "&orientation=horizontal";
  const ctg = "&category=places";
  const q = `&q=${city}`;
  try {
    const res = await axios.get(basUrl + apiKey + q + orit + ctg);
    console.log("::: city picture loaded :::");
    const imgUrl = res.data.hits[0].webformatURL
    return imgUrl
  } catch (error) {
    console.log("error", error);
    alert("No city picture found!")
    return document.getElementById("cityImage").src; 
  }
};
export { getPicture };
