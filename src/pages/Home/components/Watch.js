import Container from 'components/Container'
import Text from 'components/Text'
import React from 'react'
import watch from 'assets/watch.png'

const Watch = () => {
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
        <img src={watch} alt="" />
      </Container>
      <Container
        vertical
        distribution="center"
        gap="0.25rem"
      >
        <Text
          className='title'
        >
          Watch Everywhere
        </Text>
        <Text
          alignment="left"
          size="1.5rem"
          weight="400"
          lineHeight="160%"
        >
        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
        </Text>
      </Container>
    </Container>
  )
}

export default Watch;