import Modal from 'components/Modal';
import ModalImage from 'components/ModalImage';
import ModalOverview from 'components/ModalOverview';
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailSelector from 'store/features/details/detailSelector';
import {
  fetchSimilarTv, 
  fetchTvDetails, 
  fetchTvTrailers,
  fetchTvCast
} from 'store/features/details/detailSlice';
import SimilarMovies from './SimilarMovies';
import Cast from './Cast';

const TvDetails = () => {
  const { details, similarMovies, movieCasts } = DetailSelector();

  const { ID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTvDetails(ID))
    dispatch(fetchSimilarTv(ID))
    dispatch(fetchTvCast(ID))
    dispatch(fetchTvTrailers(ID))
  }, [dispatch, ID])
  return (
    <Modal>
      <ModalImage movie={details} />
      <ModalOverview movie={details} />
      <SimilarMovies similarMovies={similarMovies} />
      <Cast cast={movieCasts} />
    </Modal>
  )
}

export default TvDetails