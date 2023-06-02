import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Play, Plus } from '@styled-icons/fa-solid';
import { Close } from "@styled-icons/ionicons-solid/Close"
import { Check } from "@styled-icons/foundation/Check"
import Container from './Container';
import Text from './Text';
import Button from './Button';
import styled from 'styled-components';
import { addToFavorite } from 'pages/MyList';
import ListSelector from 'store/features/list/listSelector';

const ImageProperties = ({ movie, trailerOpen }) => {
  const { title, name, original_name, original_title } = movie;
  const navigate = useNavigate();
  const { list } = ListSelector()

  const presentItem = list.find((item) => item.id === movie.id);
  const dispatch = useDispatch()
  
  const addList = (e) => {
    e.stopPropagation();
    addToFavorite(list, movie);
    console.log(list)
  }

  const closeModal = () => {
    navigate('/browse')
  }

  return (
    <>
      <CloseButton onClick={closeModal}>
        <Close size={25} />
      </CloseButton>
      <div className="dark-lay"></div>
      <Container
        className='modal-desc'
        vertical
        distribution="flex-start"
      >
        <Text
          size="3.25rem"
          weight="800"
          alignment='left'
          tabAlign='left'
          uppercase
          wrap="true"
        >
          {title || original_title || name || original_name}
        </Text>
        <Container
          margin="2rem 0 0"
          gap="1rem"
        >
          <PlayButton
            bg="white"
            color="black"
            padding="1rem 1.5rem"
            size="1.65rem"
            weight="600"
            onClick={() => trailerOpen(true)}
          >
            <Play size={25} />
            <span>Play</span>
          </PlayButton>

          <RoundButton
            bg="modalBg"
            color="white"
            padding="0.85rem"
            size="1.5rem"
            weight="800"
            onClick={addList}
          >
            {
              presentItem ? <Check size={35} /> : <Plus size={35} />
            }
          </RoundButton>
        </Container>
      </Container>
    </>
  )
}

export default ImageProperties

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.75rem;
  border: none;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.modalBg};
  color: ${(props) => props.theme.colors.white};
  z-index: 200;
  cursor: pointer;
`

const PlayButton = styled(Button)`
  button{
    gap: 0.35rem;
  }
`

const RoundButton = styled(Button)`
  button{
    border-radius: 50%;
    border: 3px solid ${(props) => props.theme.colors.white};
    &:hover{
      opacity: 1;
    }
  }
`;