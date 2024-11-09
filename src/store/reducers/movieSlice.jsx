import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadMovie: (state, actions) => {
      state.info = actions.payload;
    },
    removeMovie: (state, actions) => {
      state.info = null;
    },
  },
});

export const { loadMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;
