import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileHeader from 'components/ProfileHeader'
import PopularMovies from './components/PopularMovies'
import TrendingMovies from './components/TrendingMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import Container from 'components/Container'
import PopularTvShows from './components/PopularTvShows'
import TrendingTvShows from './components/TrendingTvShows'
import TopRatedTvShows from './components/TopRatedTvShows'


const UserProfile = () => {
  return (
    <>
      <ProfileHeader />
      <Container
        vertical
        width="100%"
        gap='10rem'
        margin='2rem 0'
      >
        <PopularMovies />
        <TrendingMovies />
        <TopRatedMovies />
        <UpcomingMovies />
        <PopularTvShows />
        <TrendingTvShows />
        <TopRatedTvShows />
      </Container>
      <Outlet />
    </>
  )
}

export default UserProfile