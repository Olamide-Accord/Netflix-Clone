import { useSelector } from "react-redux";

const TvSelector = () => {
  const {
    tvShows, 
    trendingTvShows, 
    ratedTvShows,
    loading 
  } = useSelector((state) => state.tv);

  return{
    tvShows,
    trendingTvShows,
    ratedTvShows
  }
}

export default TvSelector;