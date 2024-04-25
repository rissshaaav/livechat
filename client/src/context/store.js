import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userData.slice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
