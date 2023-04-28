import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  fetchMovieDetailsUrl,
  fetchTvDetailsUrl,
  fetchSimilarMoviesUrl,
  fetchSimilarTVUrl,
  fetchMovieTrailersUrl,
  fetchTVTrailersUrl,
  fetchMovieCastsUrl,
  fetchTVCastsUrl
} from "api";


const initialState = {
  movieDetails: [],
  tvDetails: [],
  similarMovies: [],
  similarTv: [],
  movieTrailers: [],
  tvTrallers: [],
  movieCasts: [],
  tvCasts: [],
}

export const fetchMovieDetails = createAsyncThunk('details/fetchMovieDetails', (movieId) => {
  return fetch(fetchMovieDetailsUrl(movieId))
    .then((res) => res.json())
    .catch(err => console.log(err))
})

const detailSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.fulfilled, (state, {payload}) => {
        console.log(payload)
        state.movieDetails = payload;
      })
  }
});


export default detailSlice.reducer;