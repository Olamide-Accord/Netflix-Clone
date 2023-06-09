import Button from "components/Button";
import Text from "components/Text";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { StyledLink } from "components/Header";


const Wrapper = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hero =  () => {
  return (
    <Wrapper>
      <Text 
        as="h2"
        size="3.25rem"
        weight="700"
      >
        Unlimited movies, TV shows and more.
      </Text>
      <Text
        as='h5'
        size="1.75rem"
        weight="300"
      >
        Watch anywhere. Cancel anytime.
      </Text>
      <Button
        padding="1rem 2rem"
        margin="1rem"
      >
        <StyledLink to="sign-up">
          Sign Up
        </StyledLink>
      </Button>
    </Wrapper>
  )
}

export default Hero;