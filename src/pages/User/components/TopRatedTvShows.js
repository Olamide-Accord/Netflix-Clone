import React, { useEffect } from 'react'
import Card from 'components/Card'
import { useDispatch } from 'react-redux';
import { fetchTopRatedTVShows } from 'store/features/tv/tvSlice';
import TvSelector from 'store/features/tv/tvSelector';

const TopRatedTvShows = () => {
  const dispatch = useDispatch();
  const { ratedTvShows } = TvSelector();

  useEffect(() => {
    dispatch(fetchTopRatedTVShows())
  }, [dispatch]);
  return (
    <Card cardTitle='Top Rated Tv Shows' cardData={ratedTvShows} />
  )
}

export default TopRatedTvShows