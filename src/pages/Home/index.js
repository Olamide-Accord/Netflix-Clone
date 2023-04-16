import React from 'react'
import Header from "components/Header"
import Hero from './components/Hero'
import Line from './components/Line'
import EnjoyTv from './components/EnjoyTv'
import Download from './components/Download'
import Watch from './components/Watch'
import CreateProfiles from './components/CreateProfiles'
import FAQs from './components/FAQs'
import Footer from 'components/Footer'

const index = () => {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <Line />
      <EnjoyTv />
      <Line />
      <Download />
      <Line />
      <Watch />
      <Line />
      <CreateProfiles />
      <Line />
      <FAQs />
      <Line />
      <Footer />
    </>
  )
}

export default index