import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchMoviesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFail } =
  movieSlice.actions;

export default movieSlice.reducer;
