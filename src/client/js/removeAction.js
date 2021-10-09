
const removeAction = (e) => {
  console.log("remove button action");
  Client.updateWeatherInfo("N/A","N/A","N/A","N/A","N/A");
  Client.updateCityInfo("N/A","N/A","N/A");
  document.getElementById("destination").innerHTML="Please plan your rip"
  document.getElementById("departing").innerHTML="Departing:"
  document.getElementById("backing").innerHTML="Backing:"
  document.getElementById("dueDays").innerHTML="Please plan your trip"
  alert("Your trip will be removed!");
};
export { removeAction };
