const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");

app.use(express.static("./methods-public")); //static asseet
app.use(express.urlencoded({ extended: false })); //to handler form data
app.use(express.json()); // to handler json data
app.use("/api/people", peopleRouter);

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
