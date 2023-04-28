import React from 'react';
import styled, {css} from 'styled-components';
import { Eye } from "@styled-icons/bootstrap/Eye";
import { EyeSlash } from "@styled-icons/bootstrap/EyeSlash";

const shrinkLabelStyle = css`
  top: 1.25rem;
  font-size: 1.2rem;
`;

const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;
  transition: 300ms ease all;
  pointer-events: none;
  color: #8c8c8c;
  font-size: 1.2rem;
  ${({shrink}) => shrink && shrinkLabelStyle};
`

const InputWrapper = styled.input`
  padding: 1.5rem 2rem;
  font-family: inherit;
  border-radius: 0.4rem;
  width: 100%;
  border: none;
  background-color: #3b3b3b;
  font-size: 1.1rem;
  margin-top: 0.25rem;
  color: ${(props) => props.theme.colors.white};
  &:focus {
    outline: none;
    background-color: #4e4e4e;
  }
  &:focus ~ ${InputLabel} {
    ${shrinkLabelStyle}
    font-size: 1rem;
  }
`
const FormControl = styled.div`
  position: relative;
  margin-bottom: 1rem;
`

const PasswordToggleStyle = styled.div`
  position: absolute;
  right: 1.5rem;
  transform: translateY(-50%);
  top: 50%;
  cursor: pointer;
`;

const Input = ({
  label,
  type,
  passwordToggle = type === "password" ? true : false,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = React.useState(type === 'text')
  return (
    <FormControl>
      <InputWrapper 
        type={passwordToggle ? (showPassword ? 'text' : "password") : type}
        {...otherProps} 
      />
      <InputLabel shrink={otherProps.value.length}>
        {label}
      </InputLabel>
      {
        type === "password" && (
          <PasswordToggleStyle onClick={() => setShowPassword(!showPassword)}>
            {
              !showPassword ? (
                <Eye size={20} color="#8c8c8c" />
              )
              : (
                <EyeSlash size={20} color="#8c8c8c" />
              )
            }
          </PasswordToggleStyle>
        )
      }
    </FormControl>
  )
}

export default Input