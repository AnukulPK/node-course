const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//Deine paths for Express Config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

//Setup static directory to serve
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
    title: "Help",
    name: "Anukul PK",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  res.send({
    location: "Bangalore",
    forecast: "It is raining",
    address: req.query.address,
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "Help Article Not found",
    title: "Help Article Not found",
    name: "Anukul",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Page not found",
    title: "Page Not Found",
    name: "Anukul",
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
