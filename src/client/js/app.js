const axios = require("axios").default;

const getApiKey = async () => {
  try {
    const res = await axios.get("http://localhost:3031/test");
    console.log("Axios works fine", res);
  } catch (error) {
    console.log("error", error);
  }
};
export { getApiKey };
