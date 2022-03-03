/*
    Express is a flexible web framework for nodeJs design to make web app and APIs much
    faster and easierst
*/
const express = require("express");
const app = express();
/*
    app.get
    app.post
    app.delete
    app.put
    app.all
    app.use
    app.listen
*/

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});
app.get("/about", (req, res) => {
  res.status(200).send("About Page Here!!");
});
app.get("*", (req, res) => {
  res.status(404).send("<h1>Oops! Not Found</h1>");
});
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
