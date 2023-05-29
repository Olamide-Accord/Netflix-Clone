import React, { useEffect } from 'react'
import Card from 'components/Card'
import { useDispatch } from 'react-redux';
import { fetchTrendingNow } from 'store/features/movies/movieSlice';
import movieSelector from 'store/features/movies/movieSelector';

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const { trending } = movieSelector()

  useEffect(() => {
    dispatch(fetchTrendingNow())
  }, [dispatch])
  return (
    <Card cardTitle='Trending Now' cardData={trending} />
  )
}

export default TrendingMovies