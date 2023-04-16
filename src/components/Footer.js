import React from 'react'
import styled from 'styled-components';
import Container from './Container';

const FooterWrepper = styled.footer`
  padding: 5% 10%;
  color: ${(props) => props.theme.colors.footerText};
  text-decoration: underline;
  position: relative;
`;

const Footer = () => {
  return (
    <FooterWrepper>
      <h3>Questions? Contact us.</h3>
      <Container>
          <ul>
            
          </ul>
      </Container>
    </FooterWrepper>
  )
}

export default Footer