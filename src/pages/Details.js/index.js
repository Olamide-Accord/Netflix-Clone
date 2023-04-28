import Button from 'components/Button';
import Overlay from 'components/Overlay';
import React from 'react';
import { useDispatch } from "react-redux"
import DetailSelector from 'store/features/details/detailSelector';
import { fetchMovieDetails } from 'store/features/details/detailSlice';


const MovieDetails = () => {
  const {movie} = DetailSelector();
  
  return (
    <>
      {
        movie && <Overlay>
        <Button>
          CLICK ME
        </Button>
      </Overlay>
      }
    </>
  ) 
}

export default MovieDetails