import React from 'react';
import DetailSelector from 'store/features/details/detailSelector';
import Modal from 'components/Modal';

const MovieDetails = () => {
  const { details } = DetailSelector();
  return (
    <>
      {
        details && <Modal movie={details} />
      }
    </>
  ) 
}

export default MovieDetails