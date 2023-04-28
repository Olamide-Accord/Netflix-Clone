import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgba(0,0,0,0.45);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Overlay = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Overlay