import React, { useEffect } from 'react'
import Card from 'components/Card'
import { useDispatch } from 'react-redux';
import { fetchTrendingTVShows } from 'store/features/tv/tvSlice';
import TvSelector from 'store/features/tv/tvSelector';

const TrendingTvShows = () => {
  const dispatch = useDispatch();
  const { trendingTvShows } = TvSelector();

  useEffect(() => {
    dispatch(fetchTrendingTVShows())
  }, [dispatch]);
  return (
    <Card cardTitle='Trending Tv Shows' cardData={trendingTvShows} />
  )
}

export default TrendingTvShows