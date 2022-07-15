const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Anukul PK",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Anukul PK",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "Please find help here",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "Bangalore",
    forecast: "It is raining",
  });
});

// app.get("/about", (req, res) => {
//   res.send("<h1>About Page!</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Anukul",
//       age: 27,
//     },
//     {
//       name: "test",
//       age: 26,
//     },
//   ]);
// });

// app.get("", (request, response) => {
//   response.send("<h1>Weather</h1>");
// });

app.listen(3000, () => {
  console.log("Server is up and runinng on Port 3000");
});
