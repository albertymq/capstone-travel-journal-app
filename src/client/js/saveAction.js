//Global Variables Setup
let toCity = "";
let departDate = "";
let length = "";

const saveAction = (e) => {

  //get all info and update the trip infor UI
  toCity = document.getElementById("city").value;
  departDate = document.getElementById("departDate").value;
  length = document.getElementById("length").value;
  let Due = dueCalculation(departDate);
  //getting formatted backDate
  let backDate = backDateCalculation(departDate, length).backDate;
  //getting formatted departDate
  let depD = backDateCalculation(departDate,length).depD
  console.log("::: Saving :::");
  document.getElementById("destination").innerHTML = `My Trip to ${toCity}`;
  document.getElementById("departing").innerHTML = `Departing: ${depD}`;
  document.getElementById("backing").innerHTML = `Backing: ${backDate}`;
  document.getElementById(
    "dueDays"
  ).innerHTML = `Tirp to ${toCity} is <u>${Due}</u> days away`;

  
  //get Weather Daya from Genomaes and Weatherbit

  


  //get City Picture form Pixbay


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
  return {backDate, depD};
};

export { backDateCalculation };
