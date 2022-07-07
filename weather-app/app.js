const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=a7a64df4097f538f958aec8f033c7299&query=37.82.67,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
