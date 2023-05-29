import React from 'react'
import styled from 'styled-components';

const Modal = ({children}) => {
  return (
    <ModalWrapper>
      <div className="modal-container">
        {children}
      </div>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.75);
  z-index: 150;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  transition: all 0.3s linear;
  .modal-container{
    position: absolute;
    top: 10%;
    width: 70%;
    margin-bottom: 3%;
    background-color: ${(props) => props.theme.colors.modalBg};
    overflow-y: hidden;
  }
  @media only screen and (max-width: 991px) {
    .modal-container{
      width: 90%;
    }
  }
`;

export default Modal;
