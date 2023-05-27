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
  movieDetails: {},
  tvDetails: [],
  similarMovies: [],
  similarTv: [],
  movieTrailers: [],
  tvTrallers: [],
  movieCasts: [],
  tvCasts: [],
  isLoading: false,
}

export const fetchMovieDetails = createAsyncThunk('details/fetchMovieDetails', (movieId) => {
  return fetch(fetchMovieDetailsUrl(movieId))
    .then((res) => res.json())
    .catch(err => console.log(err))
});

export const fetchSimilarMovies = createAsyncThunk('details/fetchSimilarMovies', (movieId) => {
  return fetch(fetchSimilarMoviesUrl(movieId))
    .then((res) => res.json())
    .catch(err => console.log(err))
})

export const fetchMovieCast = createAsyncThunk('details/fetchMovieCast', (movieId) => {
  return fetch(fetchMovieCastsUrl(movieId))
    .then((res) => res.json())
    .catch(err => console.log(err))
})

const detailSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetails.fulfilled, (state, {payload}) => {
      state.movieDetails = payload;
    })
    builder.addCase(fetchSimilarMovies.fulfilled, (state, {payload}) => {
      state.similarMovies = payload.results;
    })
    builder.addCase(fetchMovieCast.fulfilled, (state, {payload}) => {
      state.movieCasts = payload.cast;
    })
  }
});


export default detailSlice.reducer;