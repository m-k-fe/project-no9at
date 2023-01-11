import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "students/fetchData",
  async ({ id, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/students/data/${id}`
      );
      navigate("/data");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    student: {},
    loading: false,
    err: false,
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, { payload }) => {
      state.student = {};
      state.loading = true;
      state.err = false;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.student = payload;
      state.loading = false;
      state.err = false;
    },
    [fetchData.rejected]: (state, { payload }) => {
      state.student = {};
      state.loading = false;
      state.err = payload;
    },
  },
});

export default studentsSlice.reducer;
