const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");

app.use(express.static("./methods-public")); //static asseet
app.use(express.urlencoded({ extended: false })); //to handler form data
app.use(express.json()); // to handler json data
app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
