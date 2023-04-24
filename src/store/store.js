import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movies/movieSlice"
import detailReducer from "./features/details/detailSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    details: detailReducer
  }
});

export default store;