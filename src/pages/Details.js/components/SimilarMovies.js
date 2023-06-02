import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import Text from 'components/Text'
import { ArrowSortDown, ArrowSortUp } from "@styled-icons/fluentui-system-filled"

const Image_Url = "https://image.tmdb.org/t/p/w500"

const SimilarMovies = ({similarMovies}) => {
  const [loadMore, setLoadMore] = useState(6);
  const handleLoadMore = () => {
    if (loadMore === 6) {
      setLoadMore(similarMovies.length)
    }
    else{
      setLoadMore(6);
    }
  }
  return (
    <Wrapper>
      <Text
        size="1.5rem"
        alignment="left"
        tabAlign="left"
        uppercase
      >
        More like this
      </Text>
      <StackWrapper>
        {
          similarMovies.slice(0, loadMore).map((movie) => {
            return <Data key={movie.id} movie={movie} />
          })
        }
        <div className="line">
          <button 
            onClick={handleLoadMore}
          >
            {
              loadMore > 6 ? <ArrowSortUp size={30} />
              : <ArrowSortDown size={30} />
            }
          </button>
        </div>
      </StackWrapper>
    </Wrapper>
  )
}

const Data = ({movie}) => {
  const [readMore, setReadMore] = useState(false);
  const { id, backdrop_path, poster_path, title, original_title, name, original_name, overview } = movie;
  
  return ( 
    <motion.div 
      key={id}
      className="stack-cards"
      whileHover={{scale: 0.97}}
    >
      <div className="stack-img">
        <img 
          src={
            backdrop_path !== null
              ? `${Image_Url}${backdrop_path}`
              : `${Image_Url}${poster_path}`
          } 
          alt={ title || original_title || name || original_name } 
        />
      </div>
      <div className="stack-desc">
        <Text
          size="1.45rem"
          weight="700"
          alignment="left"
          tabAlign="left"
          color='primary'
        >
          { title || original_title || name || original_name }
        </Text>
        {
          overview ? <Text
            size="1.05rem"
            weight="400"
            alignment="left"
            tabAlign="left"
            lineHeight="180%"
            margin="0.75rem 0"
          >
            {readMore ? overview : `${overview.substring(0,170)}...`}
            <span onClick={() => setReadMore(!readMore)}>
              {readMore ? ' show less' : 'read more'}
            </span>
          </Text>
          : <Text
            size="1.05rem"
            weight="400"
            alignment="left"
            tabAlign="left"
            lineHeight="170%"
            margin="0.75rem 0"
          >
            No movie overview available
          </Text>
        }
      </div>
    </motion.div>
  )
}

export default SimilarMovies


const Wrapper = styled.div`
  margin: 2rem;
`

const StackWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  .stack-cards{
    flex-basis: 22rem;
    border-radius: 0.75rem;
    background: ${(props) => props.theme.colors.faqBg};
    &:hover{
      box-shadow: 0 0.5rem 0.75rem rgba(0,0,0,0.35);
    }
    .stack-img{
      width: 100%;
      height: 20rem;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 0.75rem;
        border-top-right-radius: 0.75rem;
      }
    }
    .stack-desc{
      padding: 1rem;
    }
  }
  span{
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
  }
  .line{
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.white};
    margin: 1rem 0;
    position: relative;
  }
  button{
    background: transparent;
    color: white;
    border: 2px solid white;
    padding: 0.5rem;
    outline: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    cursor: pointer;
  }
`;