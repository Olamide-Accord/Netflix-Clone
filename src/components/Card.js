import styled from 'styled-components'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { motion } from 'framer-motion';
import Text from "./Text"
import ImageCard from './ImageCard';

const Wrapper = styled.div`
  padding: 3rem 0 1rem;
`

const ImageWrapper = styled(motion.div)`
  .my-swiper{
    padding-top: 1.5rem;
    @media only screen and (max-width: 991px) {
      padding: 1rem 0;
    }
  }
  .card-box{
    overflow: visible;
    &:hover{
      z-index: 500;
    }
  }
`;

const Card = ({ cardTitle, cardData }) => {
  return (
    <Wrapper>
      <Text
        size="2rem"
        weight="600"
        margin="1.5rem 2rem"
        alignment='left'
      >
        {cardTitle}
      </Text>
      <ImageWrapper>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          navigation
          modules={[Navigation]}
          className="my-swiper"
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            580: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {
            cardData.map((movie) => {
              return (
                <SwiperSlide 
                  className='card-box'
                  key={movie.id}
                >
                  <ImageCard movie={movie} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </ImageWrapper>
    </Wrapper>
  )
}

export default Card