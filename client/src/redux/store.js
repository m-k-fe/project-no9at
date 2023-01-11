import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./features/studentsSlice";
const store = configureStore({
  reducer: {
    students: studentsSlice,
  },
});
export default store;
