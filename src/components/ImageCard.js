import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const CardImage = styled(motion.div)`
  overflow: hidden;
  margin-top: 0.5rem;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem;
  }
  a{
    color: ${(props) => props.theme.colors.white};
  }
`;

const ImageCard = ({movie}) => {
  const {id, title, poster_path} = movie;
  return (
    <CardImage
      whileHover={{scale: 1.2}}
      layout
    >
      <Link to={`/browse/${id}`}>
        <motion.img 
          layout
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </Link>
    </CardImage>
  )
}

export default ImageCard