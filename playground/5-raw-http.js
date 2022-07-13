const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=a7a64df4097f538f958aec8f033c7299&query=45,-70&units=f`;

const request = http.request(url, (response) => {
  let data = {};
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    // const body = JSON.parse(data);
    const body = data;
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("error", error);
});

request.end();
