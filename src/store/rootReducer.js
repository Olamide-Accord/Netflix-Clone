import { combineReducers } from "redux";
import movieReducer from "./features/movies/movieSlice"
import tvReducer from "./features/tv/tvSlice"
import detailReducer from "./features/details/detailSlice";
import listReducer from "./features/list/listSlice";

const rootReducer = combineReducers({
  movies: movieReducer,
  tv: tvReducer,
  details: detailReducer,
  list: listReducer
});

export default rootReducer;