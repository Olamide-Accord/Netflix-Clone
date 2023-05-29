import React, { useEffect } from 'react'
import Card from 'components/Card'
import { useDispatch } from 'react-redux';
import { fetchTopRatedMovies } from 'store/features/movies/movieSlice';
import movieSelector from 'store/features/movies/movieSelector';

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const { ratedMovies } = movieSelector();

  useEffect(() => {
    dispatch(fetchTopRatedMovies())
  }, [dispatch]);

  return (
    <Card cardTitle='Top Rated Movies' cardData={ratedMovies} />
  )
}

export default TopRatedMovies