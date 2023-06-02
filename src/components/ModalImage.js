import React, { useState } from 'react'
import styled from 'styled-components';
import Trailers from './Trailers';
import DetailSelector from 'store/features/details/detailSelector';
import ImageProperties from './ImageProperties';

const Image_Url = 'https://image.tmdb.org/t/p/original'

const ModalImage = ({movie}) => {
  const { backdrop_path, poster_path, title, name, original_name, original_title } = movie;
  const { movieTrailers } = DetailSelector();
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <ModalWrapper>
      <img 
        src={
          backdrop_path !== null
            ? `${Image_Url}${backdrop_path}`
            : `${Image_Url}${poster_path}`
        }
        alt={title || original_title || name || original_name} />
      {
        isTrailerOpen ? <Trailers video={movieTrailers.results} trailer={setIsTrailerOpen} /> : null
      }
      <ImageProperties 
        movie={movie} 
        trailerOpen={setIsTrailerOpen}
      />
      
    </ModalWrapper>
  )
}

export default ModalImage

const ModalWrapper = styled.div`
  width: 100%;
  height: 48rem;
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