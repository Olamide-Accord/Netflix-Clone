import React from 'react'
import styled from 'styled-components';
import Container from './Container';
import Text from './Text';
import { footer } from 'db';

const FooterWrepper = styled.footer`
  padding: 5% 10%;
  color: ${(props) => props.theme.colors.footerText};
  text-decoration: underline;
  position: relative;
  ul{
    display: flex;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 1rem;
    li{
      flex-basis: 17rem;
      font-size: 1.2rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrepper>
      <Text
        alignment="left"
        tabAlign="left"
        weight="500"
        size="1.35rem"
      >
      Questions? Contact us.
      </Text>
      <Container
        margin="3.5rem 0 2rem"
      >
          <ul>
            {
              footer.map((item) => {
                return <li key={item.id}>{item.text}</li>
              })
            }
          </ul>
      </Container>
    </FooterWrepper>
  )
}

export default Footer