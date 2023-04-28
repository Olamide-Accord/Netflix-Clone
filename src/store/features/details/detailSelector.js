import { useSelector } from "react-redux";

const DetailSelector = () => {
  const {movieDetails} = useSelector((state) => state.details);
  return {
    movie: movieDetails,
  }
}

export default DetailSelector