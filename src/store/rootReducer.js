import { combineReducers } from "redux";
import movieReducer from "./features/movies/movieSlice"
import detailReducer from "./features/details/detailSlice";


const rootReducer = combineReducers({
  movies: movieReducer,
  details: detailReducer,
});

export default rootReducer;