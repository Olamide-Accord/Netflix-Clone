import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { auth, loginAuth } from 'services/firebase';
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
      localStorage.setItem('user', user);
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
          width="100%"
          gap="0.5rem"
          margin="2.5rem 0 1rem"
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
            isLoading ? "Loading..." : "Sign In"
          }
        </Button>
      </form>
    </HeroWrapper>
  )
}

export default Hero