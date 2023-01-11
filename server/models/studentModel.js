const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
  {
    studentNum: Number,
    studentName: String,
    matiereNum: String,
    matiereName: String,
    classement: String,
  },
  { timestamps: true }
);
const Student = mongoose.model("student", studentSchema);
module.exports = Student;
