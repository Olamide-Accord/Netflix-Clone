import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  fetchMovieDetailsUrl,
  fetchSimilarMoviesUrl,
  fetchMovieTrailersUrl,
  fetchMovieCastsUrl,
  fetchTvDetailsUrl,
  fetchSimilarTVUrl,
  fetchTVTrailersUrl,
  fetchTVCastsUrl
} from "api";
import axios from "axios";

const initialState = {
  movieDetails: {},
  similarMovies: [],
  movieTrailers: [],
  movieCasts: [],
  loading: false,
  error: null
}

export const fetchMovieDetails = createAsyncThunk('details/fetchMovieDetails', async(movieId) => {
  const response = await axios.get(fetchMovieDetailsUrl(movieId))
  return response.data;
});

export const fetchSimilarMovies = createAsyncThunk('details/fetchSimilarMovies', async(movieId) => {
  const response = await axios.get(fetchSimilarMoviesUrl(movieId))
  return response.data.results;
})

export const fetchMovieCast = createAsyncThunk('details/fetchMovieCast', async(movieId) => {
  const response = await axios.get(fetchMovieCastsUrl(movieId))
  return response.data.cast;
})

export const fetchMovieTrailers = createAsyncThunk('details/fetchMovieTrailers', async(movieId) => {
  const response = await axios.get(fetchMovieTrailersUrl(movieId));
  return response.data;
})

export const fetchTvDetails = createAsyncThunk('tvDetails/fetchTvDetails', async(tvId) => {
  const response = await axios.get(fetchTvDetailsUrl(tvId))
  return response.data
});

export const fetchSimilarTv = createAsyncThunk('tvDetails/fetchSimilarTv', async(tvId) => {
  const response = await axios.get(fetchSimilarTVUrl(tvId))
  return response.data.results;
})

export const fetchTvCast = createAsyncThunk('tvDetails/fetchTvCast', async(tvId) => {
  const response = await axios.get(fetchTVCastsUrl(tvId))
  return response.data.cast;
});

export const fetchTvTrailers = createAsyncThunk('tvDetails/fetchTvTrailers', async(tvId) => {
  const response = await axios.get(fetchTVTrailersUrl(tvId))
  return response.data;
})


const detailSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchMovieDetails.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.movieDetails = payload;
    })
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchSimilarMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    })  
    builder.addCase(fetchSimilarMovies.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.similarMovies = payload;
    })  
    builder.addCase(fetchSimilarMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })  
    builder.addCase(fetchMovieCast.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchMovieCast.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.movieCasts = payload;
    })
    builder.addCase(fetchMovieCast.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchMovieTrailers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchMovieTrailers.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.movieTrailers = payload;
    })
    builder.addCase(fetchMovieTrailers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchTvDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchTvDetails.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.movieDetails = payload;
    })
    builder.addCase(fetchTvDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchSimilarTv.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchSimilarTv.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.similarMovies = payload;
    })
    builder.addCase(fetchSimilarTv.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchTvCast.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchTvCast.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.movieCasts = payload;
    })
    builder.addCase(fetchTvCast.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(fetchTvTrailers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchTvTrailers.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.movieTrailers = payload;
    })
    builder.addCase(fetchTvTrailers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
});


export default detailSlice.reducer;