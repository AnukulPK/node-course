const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

forecast(37.8267, -112, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

geoCode("Boston", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
