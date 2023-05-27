import React from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from "react-router-dom";
import logo from "assets/netflix.png";
import Button from 'components/Button';
import Text from './Text';
import Overlay from './Overlay';
import { auth } from 'services/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { motion } from "framer-motion"
import { StyledLink } from './Header';
import movieSelector from 'store/features/movies/movieSelector';

const Image_Url = 'https://image.tmdb.org/t/p/original'

const ProfileHeader = () => {
  const { movies } = movieSelector();
  const movie = movies[0];
  const { backdrop_path, poster_path, title, original_title, overview} = movie;
  const navigate = useNavigate()
  const logoutAuth = () => {
    signOut(auth)
      .then(() => {
        toast.success("User signed out")
        navigate("/")
      }).catch((error) => {
        console.log(error.code)
      })
  }
  return (
    <ProfileWrapper img={backdrop_path} img2={poster_path}>
      <nav>
        <div>
          <Link to='/'>
            <img src={logo} alt="Netflix Logo" />
          </Link>
        </div>
        <Button
          bg="transparent"
        >
          <Link to="my-list">My List</Link>
        </Button>
        <Button onClick={() => logoutAuth()}>
          <StyledLink to="/">
            Sign out
          </StyledLink>
        </Button>
      </nav>
      <Overlay />
      <motion.div
        layout
        initial={{y: "100%", opacity: 0}}
        animate={{y: "-5%", opacity: 1}}
        transition={{
          duration: 1.5,
          delayChildren: '0.2'
        }}
        className="content"
      >
        <Text
          size='7rem'
          weight='800'
          uppercase
          alignment="left"
          tabAlign="left"
        >
          {title || original_title}
        </Text>
        <Text
          size='1.3rem'
          weight='300'
          alignment="left"
          tabAlign="left"
        >
          {overview}
        </Text>
      </motion.div>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.header`
  width: 100%;
  height: 100vh;
  background: ${({img, img2}) => 
    img ? `url(${Image_Url}${img})`
      : `url(${Image_Url}${img2})`
  };
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 9%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    
    img{
      width: 150px;
    }
    a{
      color: #fff;
      width: 100%;
      height: 100%;
    }
  }
  .content{
    position: absolute;
    width: 65%;
    /* top: 60%;
    left: 10%;
    transform: translateY(-50%); */
    z-index: 5;
    text-align: left;
  }
`;

export default ProfileHeader