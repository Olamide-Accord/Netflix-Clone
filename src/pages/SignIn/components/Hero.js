import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { loginAuth } from 'services/firebase';
import styled from "styled-components"
import Button from 'components/Button'
import Container from 'components/Container'
import Input from 'components/Input'
import Text from 'components/Text'
import { toast } from 'react-toastify';

const defaultFormFields = {
  email: "",
  password: "",
}

export const HeroWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 34rem;
  background-color: rgba(0,0,0,0.75);
  padding: 3.5rem 4rem 4.5rem;
  #remember{
    width: 1.75rem;
    height: 1.75rem;
    background-color: #3b3b3b;
    color: ${(props) => props.theme.colors.primary};
    border: none;
  }
  a{
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
    font-size: 1rem;
  }
`

const Hero = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false)
  const {email, password} = formFields;
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value});
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const loginSubmit = async(e) => {
    e.preventDefault();
    try{
      setIsLoading(true)
      const {user} = await loginAuth(email, password);
      localStorage.getItem('user', user);
      resetFormFields();
      setIsLoading(false);
      navigate('/browse');
    }catch(error) {
      if(error.code === "auth/user-not-found"){
        toast.error("No user associated with this email");
        setIsLoading(false)
      }else if(error.code === "auth/wrong-password"){
        toast.error("Wrong Password!");
        setIsLoading(false)
      }else if(error.code === "auth/network-request-failed"){
        toast.error("Poor network: try again!");
        setIsLoading(false)
      }else{
        console.log(error.message);
        setIsLoading(false)
      }
    }
  }

  return (
    <HeroWrapper>
      <Text
        size="2.5rem"
        alignment="left"
      >
        Sign In
      </Text>
      <form onSubmit={loginSubmit}>
        <Container
          vertical
          gap="0.5rem"
          margin="2.5rem 0 1rem"
        >
          <Container
            vertical
            width="100%"
            gap="0.5rem"
          >
            <Input
              label="Email"
              type="email"
              name="email"
              value={email}
              required
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={password}
              required
              onChange={handleChange}
            />
          </Container>
          <Button
            padding="1rem"
            type="submit"
          >
            {
              isLoading ? "Loading..." : "Log In"
            }
          </Button>
          <Container
            alignment="center"
            margin="0.5rem 0"
            gap="0.5rem"
          >
            <input type="checkbox" name="remember" id="remember" />
            <Text>Remember me</Text>
          </Container>
          <Container
            alignment="center"
            gap="0.25rem"
          >
            <Text
              size="1rem"
              weight="300"
            >
              Forgot password?
            </Text>
            <a href="#">Click here</a>
          </Container>
          <Container
            alignment="center"
            gap="0.25rem"
          >
            <Text
              size="1rem"
              weight="300"
            >
            Don't have an account?
            </Text>
            <Link to="/sign-up">Click here</Link>
          </Container>
        </Container>
      </form>
    </HeroWrapper>
  )
}

export default Hero;
