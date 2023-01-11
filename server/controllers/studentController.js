const Student = require("../models/studentModel");

const getStudentNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const students = await Student.find({ studentNum: id });
    if (students.length == 0)
      return res.status(500).json({ message: "رقم القيد غير صحيح" });
    let array = [];
    students.forEach((item) => {
      array = [
        ...array,
        {
          matiereNum: item.matiereNum,
          matiereName: item.matiereName,
          classement: item.classement,
        },
      ];
    });
    const studentData = {
      studentNum: students[0].studentNum,
      studentName: students[0].studentName,
      data: array,
    };
    res.status(200).json(studentData);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getStudentNotes,
};
