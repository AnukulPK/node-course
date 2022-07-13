const express = require("express");

const app = express();

app.get("/weather", (req, res) => {
  res.send("Show Weather!");
});

app.get("/about", (req, res) => {
  res.send("About Page!");
});

app.get("/help", (req, res) => {
  res.send("Help Page!");
});

app.get("", (request, response) => {
  response.send("Hello Express!");
});

app.listen(3000, () => {
  console.log("Server is up and runinng on Port 3000");
});
