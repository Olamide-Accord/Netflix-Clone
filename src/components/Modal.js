import React, { useEffect } from 'react'
import styled from 'styled-components';
import ModalImage from './ModalImage';
import ModalOverview from './ModalOverview';
import DetailSelector from 'store/features/details/detailSelector';
import SimilarMovies from 'pages/Details.js/components/SimilarMovies';
import Cast from 'pages/Details.js/components/Cast';

const Modal = ({movie}) => {
  const { details, similarMovies, movieCasts } = DetailSelector();
  return (
    <ModalWrapper>
      <div className="modal-container">
        <ModalImage 
          movie={movie}
        />
        <ModalOverview movie={movie} />
        {
          similarMovies && <SimilarMovies movies={similarMovies} />
        }
        {
          movieCasts && <Cast cast={movieCasts} />
        }
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-container{
    position: absolute;
    top: 8%;
    width: 70%;
    height: max-content;
    background-color: ${(props) => props.theme.colors.modalBg};
  }
  @media only screen and (max-width: 991px) {
    .modal-container{
      width: 90%;
    }
  }
`;



export default Modal;
