const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deleteUpdate,
} = require("../controllers/people");

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deleteUpdate);

/*
    chaining router
*/

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.put("/:id").put(updatePerson).delete(deleteUpdate);

module.exports = router;
