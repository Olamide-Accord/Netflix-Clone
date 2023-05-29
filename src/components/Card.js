import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Text from "./Text";
import ImageCard from './ImageCard';
import { ArrowLeft, ArrowRight } from "@styled-icons/material";

const Card = ({ cardTitle, cardData }) => {
  const [slideNum, setSlideNum] = React.useState(0);
  const slideRef = React.useRef(null);
  const handleClick = (dir) => {
    let distance = slideRef.current.getBoundingClientRect().x - 20;
    if(dir === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      slideRef.current.style.transform = `translateX(${315 + distance}px)`;
    }else if(dir === "right" && slideNum < 16 ) {
      setSlideNum(slideNum + 1);
      slideRef.current.style.transform = `translateX(${-315 + distance }px)`;
    }
  }
  
  return (
    <Wrapper>
      <Text
        size="1.65rem"
        weight="600"
        margin="1rem 3.5rem 2.5rem"
        alignment='left'
        tabAlign='left'
      >
        {cardTitle}
      </Text>
      <ImageWrapper>
        <span 
          className="arrow-icons left" 
          onClick={() => handleClick('left')}
        >
          <ArrowLeft size={70} />
        </span>
        <div 
          className="slides" 
          ref={slideRef}
        >
          { 
            cardData.map((item) => {
              return (
                <div
                  className='slide-box'
                  key={item.id}
                >
                  <ImageCard movie={item} />
                </div>
              )
            })
          }
        </div>
        <span className="arrow-icons right" onClick={() => handleClick('right')}>
          <ArrowRight size={70} />
        </span>
      </ImageWrapper>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  padding: 3rem 0;
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  .slides{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: max-content;
    transition: all 1s ease;
  }
  .slide-box{
    flex-basis: 20.5rem;
    height: 20rem;
  }
  .arrow-icons{
    position: absolute;
    top: 50%;
    transform: translateY(50%);
    color: #fff;
    cursor: pointer;
    z-index: 2;
    box-shadow: 0 0.75rem 0.75rem rgba(0,0,0,0.4);
  }
  .left{
    left: -0.65rem;
  }
  .right{
    right: -0.65rem;
  }
`;