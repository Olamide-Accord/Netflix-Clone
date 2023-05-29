import { useSelector } from "react-redux";

const useMovieSelector = () => {
  const { 
    movies, 
    trending, 
    ratedMovies, 
    upcomingMovies, 
    loading
  } = useSelector((state) => state.movies);
  
  return {
    movies,
    trending,
    ratedMovies,
    upcomingMovies,
  }
}

export default useMovieSelector