import Container from 'components/Container'
import Text from 'components/Text'
import React from 'react'

const Watch = () => {
  return (
    <Container
      as="section"
      vertical
      width="45%"
      alignment="flex-start"
      tabWidth="65%"
      tabAlignment="center"
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
  )
}

export default Watch