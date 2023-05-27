import { useSelector } from "react-redux";

const DetailSelector = () => {
  const { 
    movieDetails,
    similarMovies,
    movieCasts,
  } = 
  useSelector((state) => state.details);
  return {
    details: movieDetails,
    similarMovies,
    movieCasts,
  }
}

export default DetailSelector