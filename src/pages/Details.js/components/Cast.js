import React, { useState } from 'react';
import { motion } from "framer-motion"
import styled from 'styled-components';
import Text from 'components/Text'

const Image_Url = "https://image.tmdb.org/t/p/w154"

export const Costume = styled.div`
  padding: 2rem;
`;

export const CastStack = styled.div`
  width: 85%;
  margin: 2% auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10rem;
  justify-content: space-evenly;
  .cast-profile{
    flex-basis: 12rem;
  }
  .cast-img{
    flex-basis: 100%;
    height: 12rem;
    margin-bottom: 1.5rem;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

const Cast = ({cast}) => {
  return (
    <Costume>
      <Text
        size="1.5rem"
        alignment="left"
        tabAlign="left"
        uppercase
      >
        Cast
      </Text>
      <CastStack>
        { cast.length === 0 ? <Text
            size="2rem"
          >
            No Cast Information Available
          </Text>
          : cast.slice(0, 6).map((item, index) => {
            const { profile_path, name, original_name } = item;
            return (
              <div 
                className="cast-profile"
                key={index}
              >
                <div 
                  className='cast-img'
                >
                  <motion.img 
                    src={`${Image_Url}${profile_path}`} 
                    alt={name || original_name}
                    whileHover={{rotate: 360}}
                  />
                </div>
                <Text>
                  {name || original_name}
                </Text>
              </div>
            )
          })
        }
      </CastStack>
    </Costume>
  )
}

export default Cast