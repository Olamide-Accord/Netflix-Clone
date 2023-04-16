import { fetchPopularMovies } from "api";
import { FETCH_POPULAR_MOVIES } from "./actions";

const initialState = {
  movies: [],
  tvShows: []
}

const reducers = (state = initialState, action) => {
  if(action.type === FETCH_POPULAR_MOVIES) {
    return fetchPopularMovies();
  }
};

export default reducers;