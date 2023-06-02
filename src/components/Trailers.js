import React from 'react';
import { motion } from "framer-motion"
import styled from 'styled-components';
import { Cancel } from '@styled-icons/material-outlined/Cancel'


const TrailerWrapper = styled(motion.div)`
  position: absolute;
  top: 7rem;
  left: 8rem;
  z-index: 1000;
  width: 80%;
  height: 70%;
  .video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .cancel{
    width: 3rem;
    height: 3rem;
    color: ${(props) => props.theme.colors.white};
    position: absolute;
    top: -1rem;
    right: -1rem;
    z-index: 1000;
    cursor: pointer;
  }
`;

const Trailers = ({ video, trailer }) => {
  const officialTrailer = video.length > 0 ? video.find(trailer => trailer.type === "Trailer" || trailer.type === 'Clip') : "No Trailers Found" ;

  return (
    <TrailerWrapper
      layout
    > 
      <Cancel 
        className='cancel'
        onClick={() => trailer(false)}
      />
      <iframe
        className="video"
        src={`https://youtube.com/embed/${officialTrailer.key}?autoplay=0`}
        title='YouTube Player'
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        loading='lazy'
        allowFullScreen
        frameBorder='0'
      />
    </TrailerWrapper>
  )
}

export default Trailers