import React, {useState} from "react"
import Button from "components/Button"
import Container from "components/Container"
import Input from "components/Input"
import Text from 'components/Text'
import { HeroWrapper } from 'pages/SignIn/components/Hero'

import {  useNavigate } from "react-router-dom"
import { signupAuth } from "services/firebase";
import { toast } from "react-toastify"


const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const Hero = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [loading, setLoading] = useState(false);
  const {name, email, password, confirmPassword} = formFields;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value})
  }

  const resetForm = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      toast.error("Passwords don't match");
    }
    try{
      setLoading(true);
      const {user} = await signupAuth(email, password)
      console.log("USER CREATED:", user);
      resetForm();
      setLoading(false);
      navigate('/login')
    }catch(error) {
      if(error.code === "auth/email-already-in-use"){
        toast.error("Email is already in use!");
        setLoading(false);
      }else if(error.code === "auth/weak-password") {
        toast.error("Weak password: Password is too short.");
        setLoading(false);
      } 
      else{
        toast.error("Error: check console")
        console.log(error.message);
        setLoading(false);
      }
    }
  };
  return (
    <HeroWrapper>
      <Text
        size="2.5rem"
        alignment="left"
      >
        Sign Up
      </Text>
      <form onSubmit={handleSubmit}>
        <Container
          vertical
          width="100%"
          gap="0.5rem"
          margin="2rem 0 1rem"
        >
          <Input
            label="Name"
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
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
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={handleChange}
          />
        </Container>
        <Button
          padding="1rem"
          type="submit"
        >
          x{
            loading ? "Loading..." : "Sign up"
          }
        </Button>
      </form>
    </HeroWrapper>
  )
}

export default Hero
