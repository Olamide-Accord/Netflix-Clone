import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'components/Modal';
import ModalImage from 'components/ModalImage';
import ModalOverview from 'components/ModalOverview';
import SimilarMovies from './components/SimilarMovies';
import Cast from './components/Cast';
import { useDispatch } from 'react-redux';
import { 
  fetchMovieDetails, 
  fetchSimilarMovies, 
  fetchMovieCast, 
  fetchMovieTrailers 
} from 'store/features/details/detailSlice';
import DetailSelector from 'store/features/details/detailSelector';


const Details = () => {
  const { details, similarMovies, movieCasts } = DetailSelector();

  const { ID } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetails(ID))
    dispatch(fetchSimilarMovies(ID))
    dispatch(fetchMovieCast(ID))
    dispatch(fetchMovieTrailers(ID))
  }, [dispatch, ID, details])

  return (
    <Modal>
      <ModalImage 
        movie={details}
      />
      <ModalOverview movie={details} />
      <SimilarMovies similarMovies={similarMovies} />
      <Cast cast={movieCasts} />
    </Modal>
  ) 
}

export default Details