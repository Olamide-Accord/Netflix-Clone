import React, { useEffect } from 'react'
import Card from 'components/Card'
import { useDispatch } from 'react-redux';
import { fetchUpcomingMovies } from 'store/features/movies/movieSlice';
import movieSelector from 'store/features/movies/movieSelector';

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const { upcomingMovies } = movieSelector();

  useEffect(() => {
    dispatch(fetchUpcomingMovies())
  }, [dispatch]);

  return (
    <Card cardTitle='Movies coming soon' cardData={upcomingMovies} />
  )
}

export default UpcomingMovies