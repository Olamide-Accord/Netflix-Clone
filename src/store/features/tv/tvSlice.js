import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  fetchPopularTVShowsUrl, 
  fetchTrendingTVShowsUrl, 
  fetchTopRatedTVShowsUrl 
} from "api";
import axios from "axios";

const tvShowsUrl = fetchPopularTVShowsUrl();
const trendingTvShowsUrl = fetchTrendingTVShowsUrl();
const ratedTvShowsUrl = fetchTopRatedTVShowsUrl();

const initialState = {
  tvShows: [],
  trendingTvShows: [],
  ratedTvShows: [],
  loading: false,
  error: null
}

export const fetchPopularTVShows = createAsyncThunk('movies/fetchPopularTvShows', async() => {
  const response = await axios.get(tvShowsUrl)
  return response.data.results;
});

export const fetchTrendingTVShows = createAsyncThunk('movies/fetchTrendingTvShows', async() => {
  const response = await axios.get(trendingTvShowsUrl)
  return response.data.results;
});

export const fetchTopRatedTVShows = createAsyncThunk('movies/fetchTopRatedTvShows', async() => {
  const response = await axios.get(ratedTvShowsUrl)
  return response.data.results;
});


const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularTVShows.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchPopularTVShows.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.tvShows = payload;
    })
    builder.addCase(fetchPopularTVShows.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchTrendingTVShows.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchTrendingTVShows.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.trendingTvShows = payload;
    })
    builder.addCase(fetchTrendingTVShows.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchTopRatedTVShows.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchTopRatedTVShows.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.ratedTvShows = payload;
    })
    builder.addCase(fetchTopRatedTVShows.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
})

export default tvSlice.reducer;