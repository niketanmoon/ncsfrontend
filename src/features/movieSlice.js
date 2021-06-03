import { createSlice } from "@reduxjs/toolkit";
import movieData from "../sample.json";
const initialState = {
  moviesList: movieData.entries,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    saveMovieList: (state, action) => {
      state.moviesList.filter((f) =>
        f.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { saveMovieList } = movieSlice.actions;

export const selectMovieList = (state) => state.movies.moviesList;

export default movieSlice.reducer;
