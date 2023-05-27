import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { fetchMovieDetails, fetchSimilarMovies, fetchMovieCast } from "store/features/details/detailSlice";



const Image_Url = 'https://image.tmdb.org/t/p/w500';

const ImageCard = ({movie}) => {
  const dispatch = useDispatch()
  const {id, title, poster_path, backdrop_path} = movie;
  const navigate = useNavigate();

  const openModal = (id) => {
    navigate(`/browse/${id}`);
    document.body.classList.add('no-scroll')
    dispatch(fetchMovieDetails(id))
    dispatch(fetchSimilarMovies(id))
    dispatch(fetchMovieCast(id))
  }

  useEffect(() => {
    dispatch(fetchMovieDetails(id))
  }, [id])
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
  a{
    color: ${(props) => props.theme.colors.white};
  }
`;

export default ImageCard