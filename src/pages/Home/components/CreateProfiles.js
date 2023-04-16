import React from 'react'
import Container from 'components/Container'
import tv from "assets/tv.png"
import Text from 'components/Text'

const CreateProfiles = () => {
  return (
    <Container
      as="section"
      distribution="space-between"
      alignment="center"
    >
      <Container>
        <img src={tv} alt="" />
      </Container>
      <Container
        vertical
        alignment="flex-start"
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
    </Container>
  )
}

export default CreateProfiles