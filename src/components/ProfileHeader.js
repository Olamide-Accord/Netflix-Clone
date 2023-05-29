import React, { useEffect } from 'react'
import styled from 'styled-components'
import bg from "assets/ProfileBg.jpg"
import {Link, useNavigate, useParams} from "react-router-dom";
import logo from "assets/netflix.png";
import Button from 'components/Button';
import Text from './Text';
import Overlay from './Overlay';
import { auth } from 'services/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { motion } from "framer-motion"
import { StyledLink } from './Header';

const ProfileHeader = () => {
  const navigate = useNavigate()
  const logoutAuth = () => {
    signOut(auth)
      .then(() => {
        toast.success("User signed out")
        navigate("/")
      }).catch((error) => {
        toast.error(error.code)
      })
  }

  
  return (
    <ProfileWrapper>
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
          duration: 1.2,
          delayChildren: 0.2
        }}
        className="content"
      >
        <Text
          size='3.25rem'
          weight='800'
          uppercase
          alignment="left"
          tabAlign="left"
          margin="0.5rem 0"
        >
          The Little Mermaid
        </Text>
        <Text
          size='1.3rem'
          weight='300'
          alignment="left"
          tabAlign="left"
          lineHeight="170%"
        >
          The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy
        </Text>
      </motion.div>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.header`
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
    padding: 1.5rem 5%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    
    img{
      width: 10rem;
    }
    a{
      color: #fff;
      width: 100%;
      height: 100%;
    }
  }
  .content{
    position: absolute;
    width: 68%;
    top: 65%;
    left: 5%;
    z-index: 5;
    text-align: left;
  }
`;

export default ProfileHeader