import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Image_Url = 'https://image.tmdb.org/t/p/w500';

const ImageCard = ({movie}) => {
  const {id, title, poster_path, backdrop_path} = movie;
  const navigate = useNavigate();

  const openModal = (ID) => {
    if('first_air_date' in movie){
      navigate(`/browse/tv/${ID}`);
    } else{
      navigate(`/browse/movie/${ID}`);
    }
  }

  return (
    <CardImage
      whileHover={{scale: 1.05}}
      layout
    >
      <motion.img
        className='modal' 
        layout
        src={
          poster_path !== null 
            ? `${Image_Url}${poster_path}`
            : `${Image_Url}${backdrop_path}`
        }
        alt={title}
        onClick={() => openModal(id)}
      />
    </CardImage>
  )
};

const CardImage = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem;
    cursor: pointer;
  }
`;

export default ImageCard