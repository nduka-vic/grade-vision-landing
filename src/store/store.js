import { configureStore } from "@reduxjs/toolkit";
import waitlistReducer from "./waitlistSlice";

const store = configureStore({
  reducer: {
    waitlist: waitlistReducer,
  },
});

export default store;
