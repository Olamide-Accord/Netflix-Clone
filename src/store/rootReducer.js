import { combineReducers } from "redux";
import movieReducer from "./features/movies/movieSlice"
import tvReducer from "./features/tv/tvSlice"
import detailReducer from "./features/details/detailSlice";

const rootReducer = combineReducers({
  movies: movieReducer,
  tv: tvReducer,
  details: detailReducer,
});

export default rootReducer;