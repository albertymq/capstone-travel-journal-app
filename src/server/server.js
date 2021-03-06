var path = require("path");
const express = require("express");

const app = express();
app.use(express.static("dist"));

const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

console.log(__dirname);

//environment variables for APIkey
const dotenv = require("dotenv");
dotenv.config();

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(3031, function () {
  console.log("Travel Journal listening on port 3031!");
});

app.get("/test", function (req, res) {
  res.send("testing");
});

//ApiKeys Enviorment Variables
let ApiKeys = {
  Pixabay: process.env.Pixabay_Api_Key,
  GeoNames: process.env.GeoNames_UserName,
  Weatherbit: process.env.weatherbit_Api_Key,
};
//getApiKeys request
app.get("/getApiKeys", function (req, res) {
  res.send(ApiKeys);
});

//postData into projectData
let projectData = {};

app.post("/postInfo", function(req,res){
  console.log(req.body);
})



app.get("/all", function (req, res) {
  res.send(projectData);
});
