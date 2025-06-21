import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submitted: false,
  loading: false,
};

const waitlistSlice = createSlice({
  name: "waitlist",
  initialState,
  reducers: {
    setSubmitted: (state) => {
        state.loading = true;
      state.submitted = true;
    },
    stopLoading: (state) => {
        state.loading = false;
    }
  },
});

export const { setSubmitted, stopLoading } = waitlistSlice.actions;
export default waitlistSlice.reducer;
