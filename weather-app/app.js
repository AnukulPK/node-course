const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (address) {
  geoCode(address, (geoCodeError, geoCodeData) => {
    if (geoCodeError) {
      return console.log("Error", geoCodeError);
    }

    forecast(
      geoCodeData.latitude,
      geoCodeData.longitude,
      (forecastError, forecastData) => {
        if (forecastError) {
          return console.log(forecastError);
        }
        console.log(geoCodeData.location);
        console.log(forecastData.finalMessage);
      }
    );
  });
} else {
  console.log("Enter a valid location");
}
