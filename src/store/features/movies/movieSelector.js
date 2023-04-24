import { useSelector } from "react-redux";

const useMovieSelector = () => {
  const { 
    movies, 
    trending, 
    ratedMovies, 
    upcomingMovies, 
    tvShows, 
    trendingTvShows, 
    ratedTvShows 
  } = useSelector((state) => state.movies);
  
  return {
    movies,
    trending,
    ratedMovies,
    upcomingMovies,
    tvShows,
    trendingTvShows,
    ratedTvShows
  }
}

export default useMovieSelector