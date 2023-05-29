import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  fetchPopularMoviesUrl, 
  fetchTrendingNowUrl, 
  fetchTopRatedMoviesUrl, 
  fetchUpcomingMoviesUrl, 
} from "api";
import axios from "axios";

const movieUrl = fetchPopularMoviesUrl();
const trendingNowUrl = fetchTrendingNowUrl();
const ratedMoviesUrl = fetchTopRatedMoviesUrl();
const upcomingMoviesUrl = fetchUpcomingMoviesUrl();

const initialState = {
  movies: [],
  trending: [],
  ratedMovies: [],
  upcomingMovies: [],
  loading: false,
  error: null
}

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularNow', async() => {
  const response = await axios.get(movieUrl);
  return response.data.results;
});

export const fetchTrendingNow = createAsyncThunk('movies/fetchTrendingNow', async() => {
  const response = await axios.get(trendingNowUrl);
  return response.data.results;
});

export const fetchTopRatedMovies = createAsyncThunk('movies/fetchTopRatedMovies', async() => {
  const response = await axios.get(ratedMoviesUrl);
  return response.data.results;
});

export const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcomingMovies', async() => {
  const response = await axios.get(upcomingMoviesUrl);
  return response.data.results;
});


const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchPopularMovies.fulfilled, (state, {payload}) =>{
      state.loading = false;
      state.movies = payload;
    })
    builder.addCase(fetchPopularMovies.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchTrendingNow.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchTrendingNow.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.trending = payload;
    })
    builder.addCase(fetchTrendingNow.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchTopRatedMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchTopRatedMovies.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.ratedMovies = payload;
    })
    builder.addCase(fetchTopRatedMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchUpcomingMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchUpcomingMovies.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.upcomingMovies = payload;
    })
    builder.addCase(fetchUpcomingMovies.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    })  
  }
});

export default movieSlice.reducer;