let { people } = require("../data");
const getPeople = (req, res) => {
  res.status(200).json({
    success: true,
    data: people,
  });
};

const createPerson = (req, res) => {
  (req, res) => {
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
  };
};

const createPersonPostman = (req, res) => {
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
};

const updatePerson = (req, res) => {
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
};

const deleteUpdate = (req, res) => {
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
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deleteUpdate,
};
