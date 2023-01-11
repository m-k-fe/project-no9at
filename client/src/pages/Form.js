import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/features/studentsSlice";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const { loading, err } = useSelector((state) => state.students);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) dispatch(fetchData({ id, navigate }));
    else alert("المرجو ادخال رقم القيد");
  };
  return (
    <>
      {err && <div style={{ color: "red" }}>{err}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ادخل رقم القيد"
          onChange={(e) => setId(e.target.value)}
        />
        {loading ? (
          <span>"Loading..."</span>
        ) : (
          <input type="submit" value="ارسال" />
        )}
      </form>
    </>
  );
}

export default Form;
