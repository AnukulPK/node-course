const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const forecastUrl = `http://api.weatherstack.com/current?access_key=a7a64df4097f538f958aec8f033c7299&query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}&units=f`;
  request({ url: forecastUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to retrieve weather for this location", undefined);
    } else {
      const data = response.body;
      callback(undefined, {
        weatherDescription: data.current.weather_descriptions[0],
        temperature: data.current.temperature,
        feelsLikeTemperature: data.current.feelslike,
        finalMessage: `${data.current.weather_descriptions[0]}. Is is currently ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out`,
      });
    }
  });
};

module.exports = forecast;
