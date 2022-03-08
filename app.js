const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false })); //to handler form data
app.use(express.json()); // to handler json data

app.get("/api/people", (req, res) => {
  res.status(200).json({
    success: true,
    data: people,
  });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "please provide name value",
    });
  }
  return res.status(201).json({
    success: true,
    person: name,
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send("Please provide credentials");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
