import React from "react";
import { useSelector } from "react-redux";

function Data() {
  const { student } = useSelector((state) => state.students);
  return (
    <div>
      <h1>اسم الطالب: {student && student.studentName}</h1>
      <table>
        <thead>
          <th>رقم المقرر</th>
          <th>اسم المقرر</th>
          <th>التقدير</th>
        </thead>
        <tbody>
          {student &&
            student.data &&
            student.data.map((item) => (
              <tr key={item.matiereNum}>
                <td>{item.matiereNum}</td>
                <td>{item.matiereName}</td>
                <td>{item.classement}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
