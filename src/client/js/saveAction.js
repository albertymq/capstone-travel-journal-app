//Global Variables Setup
let toCity = "";
let departDate = "";
let length = "";
let zip = "";

const saveAction = (e) => {
  //get all info and update the trip infor UI
  toCity = document.getElementById("city").value;
  departDate = document.getElementById("departDate").value;
  length = document.getElementById("length").value;
  zip = document.getElementById("zip").value;
  let Due = dueCalculation(departDate);
  //getting formatted backDate
  let backDate = backDateCalculation(departDate, length).backDate;
  //getting formatted departDate
  let depD = backDateCalculation(departDate, length).depD;
  console.log("::: Saving :::");
  document.getElementById("destination").innerHTML = `My Trip to ${toCity}`;
  document.getElementById("departing").innerHTML = `Departing: ${depD}`;
  document.getElementById("backing").innerHTML = `Backing: ${backDate}`;
  document.getElementById(
    "dueDays"
  ).innerHTML = `Tirp to ${toCity} is <u>${Due}</u> days away`;

  //check whether DueDays is larger than 17, if it's larger than 16 pass 16 to forecast date
  if (Due > 17) {
    alert(
      "Tips: We can only forecast weather in 16 days, the weather forecast may not accurate"
    );
    Due = 15;
  }
  Client.getApiKey().then(function (res) {
    console.log("::: ApiKey get :::");

    //get city picture from Pixabay and update UI
    let pictureApi = res.data.Pixabay;
    Client.getPicture(pictureApi, toCity).then(function (imgUrl) {
      Client.updateCityImage(imgUrl);
    });

    //get GeoNames and Weather Info and Update UI

    let geoNamesApi = res.data.GeoNames;
    let weatherbitApi = res.data.Weatherbit;
    Client.getGeoNames(geoNamesApi, toCity, zip).then(function (data) {
      //get Weather Info based on geoNames
      Client.getWeather(weatherbitApi, data.lat, data.lng, Due).then(function (
        data
      ) {
        Client.updateWeatherInfo(
          data.high,
          data.low,
          data.wspd,
          data.wdir,
          data.overall
        );
      });

      Client.updateCityInfo(data.Name, data.admin1, data.country);
    });
  });
};
export { saveAction };

const dueCalculation = (departDate) => {
  let today = new Date();
  let depDay = new Date(departDate);
  let Due = Math.round((depDay - today) / (1000 * 60 * 60 * 24));
  return Due;
};

export { dueCalculation };

const backDateCalculation = (departDate, length) => {
  let depDay = new Date(departDate);
  let backDay = new Date(depDay.getTime() + length * 24 * 60 * 60 * 1000);
  let backDate = `${backDay.getFullYear()}-${
    backDay.getMonth() + 1
  }-${backDay.getDate()}`;
  //formating the departDate as well
  let depD = `${depDay.getFullYear()}-${
    depDay.getMonth() + 1
  }-${depDay.getDate()}`;
  return { backDate, depD };
};

export { backDateCalculation };
