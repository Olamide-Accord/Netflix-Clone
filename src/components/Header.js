import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from "assets/bg.jpg"
import logo from "assets/netflix.png";
import Button from 'components/Button';
import Overlay from './Overlay';


const HeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 9%;
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    img{
      width: 150px;
    }
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: #fff;
`;

const Header = ({children}) => {
  return (
    <HeaderWrapper>
      <nav>
        <Link to='/'>
          <img src={logo} alt="Netflix Logo" />
        </Link>
        <Button
          padding="0.85rem 1.45rem"
          size="1.1rem"
          weight="500"
        >
          <StyledLink to="/login">
            Sign in
          </StyledLink>
        </Button>
      </nav>
      <Overlay />
      {children}
    </HeaderWrapper>
  )
}

export default Header

