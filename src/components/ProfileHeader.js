import React from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from "react-router-dom";
import bg from "assets/ProfileBg.jpg"
import logo from "assets/netflix.png";
import Button from 'components/Button';
import Text from './Text';
import Overlay from './Overlay';
import { auth } from 'services/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { motion } from "framer-motion"
import { StyledLink } from './Header';

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
    top: 70%;
    left: 10%;
    transform: translateY(-50%);
    z-index: 5;
    text-align: left;
    h3{
      font-size: 3rem;
      font-weight: 600;
    }
    p{
      font-size: 1.2rem;
      font-weight: 200;
    }
  }
`;

const ProfileHeader = () => {
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
      {/* <motion.div
        initial={{y: "100%"}}
        animate={{y: "1%"}}
        transition={{
          duration: 1.5,
          delayChildren: '0.2'
        }}
        className="content"
      >
        <motion.h3
          initial={{opacity: 0}}
          animate={{opacity: 1}}
        >
          THE SUPER MARIO BROS. MOVIE
        </motion.h3>
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
        >
          While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.
        </motion.p>
      </motion.div> */}
    </ProfileWrapper>
  )
}

export default ProfileHeader