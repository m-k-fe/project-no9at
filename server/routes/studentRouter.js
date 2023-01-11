const express = require("express");
const router = express.Router();
const { getStudentNotes } = require("../controllers/studentController");

router.get("/data/:id", getStudentNotes);

module.exports = router;
