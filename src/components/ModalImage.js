import React from 'react'
import styled from 'styled-components';
import Container from './Container';
import Text from './Text';
import Button from './Button';
import { Play } from '@styled-icons/fa-solid/Play';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Close } from "@styled-icons/ionicons-solid/Close"
import { useNavigate } from 'react-router-dom';
import DetailSelector from 'store/features/details/detailSelector';

const Image_Url = 'https://image.tmdb.org/t/p/original'

const RoundButton = styled(Button)`
  button{
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.white};
    &:hover{
      opacity: 1;
    }
  }
`;

const ModalImage = ({movie}) => {
  const { backdrop_path, poster_path, title, name, original_name, original_title } = movie;
  return (
    <ModalWrapper>
      <img 
        src={
          backdrop_path !== null
            ? `${Image_Url}${backdrop_path}`
            : `${Image_Url}${poster_path}`
        }
        alt={title || original_title || name || original_name} />
      <ImageProperties movie={movie} />
    </ModalWrapper>
  )
}

export default ModalImage

const ModalWrapper = styled.div`
  width: 100%;
  height: 42rem;
  position: relative;
  .dark-lay{
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.45);
  }
  .modal-desc{
    z-index: 300;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

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

const ImageProperties = ({movie}) => {
  const { title, name, original_name, original_title } = movie;

  const { movieTrailers } = DetailSelector()
  const navigate = useNavigate()
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
            onClick={() => console.log(movieTrailers)}
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
          >
            <Plus size={35} />
          </RoundButton>
        </Container>
      </Container>
    </>
  )
}