import Container from 'components/Container'
import Text from 'components/Text'
import tv from "assets/tv.png"

const EnjoyTv = () => {
  return (
    <Container
      as='section'
      alignment="center"
      gap="1rem"
      tabGap="2rem"
      tabVertical
      tabAlignment="center"
    >
      <Container
        vertical
        distribution="center"
        gap="0.25rem"
      >
        <Text
          as="h3"
          className='title'
        >
          Enjoy on your TV.
        </Text>
        <Text
          alignment="left"
          size="1.5rem"
          weight="400"
          lineHeight="160%"
        >
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
        </Text>
      </Container>
      <Container
        className="img-wrapper"
      >
        <img src={tv} alt="tv" />
      </Container>
    </Container>
  )
}

export default EnjoyTv