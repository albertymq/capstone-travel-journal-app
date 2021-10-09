//Global Variables Setup

let toCity;
let departDate;
let length;

const saveAction = (e) => {
  toCity = document.getElementById("city").value;
  departDate = document.getElementById("departDate").value;
  length = document.getElementById("length").value;
  console.log("save button action", toCity, departDate, length);
};
export { saveAction };
