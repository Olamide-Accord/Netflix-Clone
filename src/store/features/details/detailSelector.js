import { useSelector } from "react-redux";

const DetailSelector = () => {
  const { 
    movieDetails,
    similarMovies,
    movieCasts,
    movieTrailers,
    loading,
  } = 
  useSelector((state) => state.details);
  return {
    details: movieDetails,
    similarMovies,
    movieCasts,
    movieTrailers,
    loading
  }
}

export default DetailSelector