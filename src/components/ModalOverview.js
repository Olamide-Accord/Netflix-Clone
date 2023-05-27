import React from 'react'
import styled from 'styled-components';
import Text from './Text';
import Container from './Container';

const OverviewWrapper = styled.div`
  padding: 3rem 2rem;
`

const OverviewButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 1.75rem;
  background: transparent;
  padding: 0.7rem 1.2rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  font-size: 1.25rem;
`;

const ModalOverview = ({movie}) => {
  const { genres, overview, release_date, spoken_languages, video, vote_average } = movie;
  const vote = Math.floor(vote_average)
  return (
    <OverviewWrapper>
      <Container
        vertical
        gap="1.5rem"
        alignment='flex-start'
      >
        <Text
          size='1.75rem'
          weight="600"
          uppercase
        >
          Overview
        </Text>
        <Container
          vertical
          alignment='flex-start'
        >
          <Text
            size="1.1rem"
            margin="0.2rem 0"
          >
            Ratings: {vote}/10
          </Text>
          <Text
            size="1.1rem"
            margin="0.2rem 0"
          >
            Release Date: {release_date}
          </Text>
        </Container>
        <Container
          vertical
          distribution='flex-start'
        > 
          <Text
            size="1.15rem"
            alignment="left"
            tabAlign="left"
            lineHeight="180%"
          >
            {overview}
          </Text>
        </Container>
        <Genres genres={genres} />
        <Languages languages={spoken_languages} />
      </Container>
    </OverviewWrapper>
  )
}

const Genres = ({genres}) => {
  return (
    <Container
      vertical
      distribution='flex-start'
      gap="1rem"
    >
      <Text
        size='1.3rem'
        weight="600"
        alignment="left"
        tabAlign="left"
        uppercase
      >
        Genres
      </Text>
      <Container
        gap="1rem"
      >
        {
          genres?.map((item) => {
            const { id, name } = item;
            return (
              <OverviewButton key={id}>
                {name && name}
              </OverviewButton>
            )
          })
        }
      </Container>
    </Container>
  )
}

const Languages = ({languages}) => {
  return (
    <Container
      vertical
      distribution='flex-start'
      gap="1rem"
    >
      <Text
        size='1.3rem'
        weight="600"
        alignment="left"
        tabAlign="left"
        uppercase
      >
        Languages
      </Text>
      <Container
        gap="1rem"
      >
        {
          languages?.map((item, index) => {
            return (
              <OverviewButton key={index}>
                {item.english_name}
              </OverviewButton>
            )
          })
        }
      </Container>
    </Container>
  )
}

export default ModalOverview