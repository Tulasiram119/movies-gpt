import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "choice",
  initialState: "movies",
  reducers: {
    changeState: (state, action) => {
      state = action.payload;
    },
  },
});

export default stateSlice.reducer;

export const { changeState } = stateSlice.actions;
