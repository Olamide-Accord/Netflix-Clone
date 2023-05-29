import React, { useEffect } from 'react'
import Card from 'components/Card'
import { useDispatch } from 'react-redux';
import { fetchPopularTVShows } from 'store/features/tv/tvSlice';
import TvSelector from 'store/features/tv/tvSelector';
import Text from 'components/Text';

const PopularTvShows = () => {
  const dispatch = useDispatch();
  const { tvShows, loading } = TvSelector();

  useEffect(() => {
    dispatch(fetchPopularTVShows())
  }, [dispatch]);

  if(loading) {
    return <Text size="2rem">Loading...</Text>
  }

  return (
    <Card cardTitle='Popular Tv Shows' cardData={tvShows} />
  )
}

export default PopularTvShows