import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  fetchPopularMoviesUrl, 
  fetchTrendingNowUrl, 
  fetchTopRatedMoviesUrl, 
  fetchUpcomingMoviesUrl, 
  fetchPopularTVShowsUrl, 
  fetchTrendingTVShowsUrl, 
  fetchTopRatedTVShowsUrl 
} from "api";


const movieUrl = fetchPopularMoviesUrl();
const tvUrl = fetchTrendingNowUrl();
const ratedMoviesUrl = fetchTopRatedMoviesUrl();
const upcomingMoviesUrl = fetchUpcomingMoviesUrl();
const tvShowsUrl = fetchPopularTVShowsUrl();
const trendingTvShowsUrl = fetchTrendingTVShowsUrl();
const ratedTvShowsUrl = fetchTopRatedTVShowsUrl();

const initialState = {
  movies: [],
  hasMore: false,
  totalResults: 0,
  page: 0,
  totalPages: 0,
  isLoading: false,
  trending: [],
  ratedMovies: [],
  upcomingMovies: [],
  tvShows: [],
  trendingTvShows: [],
  ratedTvShows: []
}

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularNow', () => {
  return fetch(movieUrl)
    .then(res => res.json())
    .catch(err => console.log(err))
});

export const fetchTrendingNow = createAsyncThunk('movies/fetchTrendingNow', () => {
  return fetch(tvUrl)
    .then(res => res.json())
    .catch(err => console.log(err))
});

export const fetchTopRatedMovies = createAsyncThunk('movies/fetchTopRatedMovies', () => {
  return fetch(ratedMoviesUrl)
    .then(res => res.json())
    .catch(err => console.log(err))
});

export const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcomingMovies', () => {
  return fetch(upcomingMoviesUrl)
    .then(res => res.json())
    .catch(err => console.log(err))
});

export const fetchPopularTVShows = createAsyncThunk('movies/fetchPopularTvShows', () => {
  return fetch(tvShowsUrl)
    .then(res => res.json())
    .catch(err => console.log(err))
});

export const fetchTrendingTVShows = createAsyncThunk('movies/fetchTrendingTvShows', () => {
  return fetch(trendingTvShowsUrl)
    .then(res => res.json())
    .catch(err => console.log(err))
});

export const fetchTopRatedTVShows = createAsyncThunk('movies/fetchTopRatedTvShows', () => {
  return fetch(ratedTvShowsUrl)
    .then(res => res.json())
    .catch(err => console.log(err))
});


const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getPopularMovies : (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    fetchedPopularMovies: (state, {payload}) => {
      return {
        ...state,
        movies: [...state.movies, payload.results],
        hasMore: payload.page < payload.total_pages,
        totalResults: payload.total_results,
        page: payload.page,
        totalPages: payload.total_pages,
        isLoading: false
      }
    },
    resetState: (state) => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.fulfilled, (state, {payload}) =>{
        state.movies = payload.results;
      })
      .addCase(fetchTrendingNow.fulfilled, (state, {payload}) => {
        state.trending = payload.results;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, {payload}) => {
        state.ratedMovies = payload.results;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, {payload}) => {
        state.upcomingMovies = payload.results;
      })
      .addCase(fetchPopularTVShows.fulfilled, (state, {payload}) => {
        state.tvShows = payload.results;
      })
      .addCase(fetchTrendingTVShows.fulfilled, (state, {payload}) => {
        state.trendingTvShows = payload.results;
      })
      .addCase(fetchTopRatedTVShows.fulfilled, (state, {payload}) => {
        state.ratedTvShows = payload.results;
      })
  }
});

// export const { getPopularMovies, fetchedPopularMovies, resetState } = movieSlice.actions;
export default movieSlice.reducer;