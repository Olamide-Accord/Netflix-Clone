import React, { useEffect } from 'react'
import Card from 'components/Card'
import { useDispatch } from 'react-redux';
import { fetchPopularMovies } from 'store/features/movies/movieSlice';
import movieSelector from 'store/features/movies/movieSelector';

const PopularMovies = () => {
  const dispatch = useDispatch();
  const { movies } = movieSelector();

  useEffect(() => {
    dispatch(fetchPopularMovies())
  }, [dispatch]);
  return (
    <Card cardTitle='Popular on Netflix' cardData={movies} />
  )
}

export default PopularMovies