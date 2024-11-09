import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadTv: (state, actions) => {
      state.info = actions.payload;
    },
    removeTv: (state, actions) => {
      state.info = null;
    },
  },
});

export const { loadTv, removeTv } = tvSlice.actions;

export default tvSlice.reducer;
