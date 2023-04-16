import React from 'react'
import styled from 'styled-components'

const LineWrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${(props) => props.theme.colors.line};
  position: relative;
  z-index: 10;
`;

const Line = () => {
  return (
    <LineWrapper> </LineWrapper>
  )
}

export default Line