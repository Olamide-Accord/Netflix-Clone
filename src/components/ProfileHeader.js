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

const ProfileWrapper = styled.header`
  width: 100%;
  min-height: 100vh;
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
        <Link to='/'>
          <img src={logo} alt="Netflix Logo" />
        </Link>
        <Button onClick={() => logoutAuth()}>
          Sign out
        </Button>
      </nav>
      <Overlay />
      <div className="content">
        <Text
          as="h2"
          size="3rem"
          alignment="left"
          weight="700"
        >
          THE SUPER MARIO BROS. MOVIE
        </Text>
        <Text
          weight="300"
          lineHeight="150%"
          alignment="left"
        >
          While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.
        </Text>
      </div>
    </ProfileWrapper>
  )
}

export default ProfileHeader