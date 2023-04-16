import React from 'react'
import { fetchPopularMovies } from 'api';
import Container from 'components/Container';
import Text from 'components/Text';


const PopularMovies = () => {
  fetchPopularMovies();

  return (
    <Container
      vertical
      padding="2rem 0"
      gap="1rem"
      alignment="flex-start"
    >
      <Text
        size="2.5rem"
        weight="600"
      >
        Popular Movies
      </Text>

    </Container>
  )
}

export default PopularMovies