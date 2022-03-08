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

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      message: "please provide name value",
    });
  }

  return res.status(201).json({
    success: true,
    data: [...people, name],
  });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((p) => p.id === Number(id));
  if (!person) {
    return res.status(400).json({
      success: false,
      msg: "no person with id",
    });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return people;
  });

  return res.status(200).json({
    success: true,
    data: newPeople,
  });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === Number(id));
  if (!person) {
    return res.status(400).json({
      success: false,
      msg: "no person with id",
    });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({
    success: true,
    data: newPeople,
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
