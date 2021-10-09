const axios = require("axios").default;

const getApiKey = async () => {
  try {
    const res = await axios.get("http://localhost:3031/getApiKeys");
    console.log("Axios works fine, successfully bring us ApiKeys",res);
    return res;
  } catch (error) {
    console.log("error", error);
  }
};
export { getApiKey };
