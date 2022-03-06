const express = require("express");
const app = express();
const { people, products } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Welcome to our public Api" });
});
app.listen(5000, () => {
  console.log("Server is listing on port 5000 ...");
});
