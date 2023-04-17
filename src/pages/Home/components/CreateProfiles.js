import React from 'react'
import Container from 'components/Container'
import kids from "assets/kids.png"
import Text from 'components/Text'

const CreateProfiles = () => {
  return (
    <Container
      as="section"
      distribution="space-between"
      alignment="center"
    >
      <Container
        vertical
        distribution="center"
        gap="0.25rem"
      >
        <Text 
          className="title"
        >
          Create profiles for kids.
        </Text>
        <Text
          alignment="left"
          size="1.5rem"
          weight="400"
          lineHeight="160%"
        >
        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
        </Text>
      </Container>
      <Container
        className="img-wrapper"
      >
        <img src={kids} alt="Create profiles for kids" />
      </Container>
    </Container>
  )
}

export default CreateProfiles