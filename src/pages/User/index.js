import {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import movieSelector from 'store/features/movies/movieSelector'
import { 
  fetchPopularMovies, 
  fetchTrendingNow, 
  fetchTopRatedMovies, 
  fetchUpcomingMovies, 
  fetchPopularTVShows, 
  fetchTrendingTVShows, 
  fetchTopRatedTVShows 
} from 'store/features/movies/movieSlice'

import ProfileHeader from 'components/ProfileHeader'
import Card from 'components/Card'


const UserProfile = () => {
  const { 
    movies, 
    trending,
    ratedMovies, 
    upcomingMovies, 
    tvShows, 
    trendingTvShows, 
    ratedTvShows 
  } = movieSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTrendingNow());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchPopularTVShows());
    dispatch(fetchTrendingTVShows());
    dispatch(fetchTopRatedTVShows());
  })

  return (
    <div style={{color: "#fff"}}>
      <ProfileHeader />
      <Card cardTitle="Popular on Netflix" cardData={movies} />
      <Card cardTitle="Trending Movies" cardData={trending} />
      <Card cardTitle="Top Rated Movies" cardData={ratedMovies} />
      <Card cardTitle="Movies Coming Soon" cardData={upcomingMovies} />
      <Card cardTitle="Popular Tv Shows" cardData={tvShows} />
      <Card cardTitle="Trending Tv Shows" cardData={trendingTvShows} />
      <Card cardTitle="Top Rated Tv Shows" cardData={ratedTvShows} />
      <Outlet />
    </div>
  )
}

export default UserProfile