import React from 'react'
import Container from 'components/Container'
import Text from 'components/Text'
import mobile from "assets/download.png"

const Download = () => {
  return (
    <Container
      as="section"
      alignment="center"
      gap="1rem"
      tabGap="2rem"
      tabVertical
      tabAlignment="center"
    >
      <Container
        className="img-wrapper"
      >
        <img src={mobile} alt="mobile download" />
      </Container>
      <Container
        vertical
        distribution="center"
        gap="0.25rem"
      >
        <Text
          className='title'
        >
          Download your shows to watch offline.
        </Text>
        <Text
          alignment="left"
          size="1.5rem"
          weight="400"
          lineHeight="160%"
        >
          Save your favorites easily and always have something to watch.
        </Text>
      </Container>
    </Container>
  )
}

export default Download