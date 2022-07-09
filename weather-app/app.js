const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=a7a64df4097f538f958aec8f033c7299&query=37.82.67,-122.4233&units=f';

request({ url: url, json: true }, (_error, response) => {
  const data = response.body;
  console.log(
    `${data.current.weather_descriptions[0]}. Is is currently ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out`
  );
});

const geoCodeUrl =
  'http://api.positionstack.com/v1/forward?access_key=61031a5344a762633525f3b1fd0f8874&query=1600 Pennsylvania Ave NW, Washington DC';
request({ url: geoCodeUrl, json: true }, (_error, response) => {
  const data2 = response.body.data[0];
  const latitude = data2.latitude;
  const longitude = data2.longitude;
  console.log(latitude);
  console.log(longitude);
});
