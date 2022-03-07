const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const authorize = require("./middleware/authorize");

/*
  app.use prends affecte uniquement le contenu en bas de soi, et ca n'affecte pas le contenu en haut de
  sa declaration
*/
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("About");
});

app.get("/api/product", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5001, () => {
  console.log("server is listing on port 5000 ...");
});
