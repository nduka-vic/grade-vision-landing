import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submitted: false,
  loading: false,
  error: "",
};

const waitlistSlice = createSlice({
  name: "waitlist",
  initialState,
  reducers: {
    setSubmitted: (state) => {
      state.submitted = true;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = "";
    },
  },
});

export const { setSubmitted, setLoading, setError, clearError } =
  waitlistSlice.actions;
export default waitlistSlice.reducer;
