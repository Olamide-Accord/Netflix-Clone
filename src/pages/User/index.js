import React from 'react'
import ProfileHeader from 'components/ProfileHeader'
import PopularMovies from './components/PopularMovies'
import TrendingMovies from './components/TrendingMovies'
import TopRatedMovies from './components/TopRatedMovies'
import ComingSoon from './components/ComingSoon'
import PopularTv from './components/PopularTv'
import TrendingTvShows from './components/TrendingTvShows'
import TopRatedTvShows from './components/TopRatedTvShows'

const index = () => {
  return (
    <div style={{color: "#fff"}}>
      <ProfileHeader />
      <PopularMovies />
      <TrendingMovies />
      <TopRatedMovies />
      <ComingSoon />
      <PopularTv />
      <TrendingTvShows />
      <TopRatedTvShows />
    </div>
  )
}

export default index