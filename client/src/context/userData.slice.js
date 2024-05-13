import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    globalUsername: "null",
    globalEmail: "null",
  },
  reducers: {
    storeUsername: (state, action) => {
      state.globalUsername = action.payload;
    },
    storeEmail: (state, action) => {
      state.globalEmail = action.payload;
    },
  },
});

export const { storeUsername, storeEmail } = userDataSlice.actions;
export default userDataSlice.reducer;