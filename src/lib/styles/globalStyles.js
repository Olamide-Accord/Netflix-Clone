import { createGlobalStyle } from 'styled-components'
import './globals.css'

const globalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    font-family: 'Martel Sans', sans-serif;
  }
  ::selection{
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
  html{
    scroll-behavior: smooth;
    font-size: 90%;
    overflow-x: hidden;
    scroll-padding-top: 4rem;
  }
  body{
    background-color: ${(props) => props.theme.colors.black};
  }
  section{
    padding: 5% 10%;
  }
  .title{
    font-size: 3.5rem;
    font-weight: 800;
    text-align: start;
  }
  .img-wrapper{
    min-height: 50vh;
    min-width: 50%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .no-scroll{
    overflow-y: hidden;
  }
  @media only screen and (max-width: 991px) {
    html{
      font-size: 70%;
    }
    section{
      padding: 5% 2rem;
    }
    .title{
      font-size: 2.75rem;
      text-align: center;
    }
    .img-wrapper{
      width: 100%;
      min-height: 20vh;
    }
  }
  @media only screen and (max-width: 580px) {
    html{
      font-size: 55%;
    }
  }
  @media only screen and (max-width: 360px) {
    html{
      font-size: 50%;
    }
  }
`;

export default globalStyles