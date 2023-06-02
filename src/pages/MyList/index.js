import React from 'react'
import Container from "components/Container";
import Text from "components/Text";
import styled from 'styled-components';

export const addToFavorite = (listArr, favoriteObj) => {
  const existingFavorite = listArr.find((listItem) => listItem.id === favoriteObj.id)
    if(existingFavorite) {
      return [...listArr]
    }
    else{
      return [...listArr, favoriteObj]
    } 
}

const MyList = () => {
  
  return (
    <Wrapper>
      <nav>
        <Text
          size="2.35rem"
          weight="700"
        >
          My List
        </Text>
      </nav>
      {/* {
        list.length > 0 ? (
          <ListContainer>
            {
              list.map((item) => {
                console.log(item)
                return (
                  <div key={item.id}>

                  </div>
                )
              })
            }
          </ListContainer>
        )
        : (
          <Container
            alignment='center'
            distribution="center"
          >
            <Text
              as="h2"
              size="3rem"
            >
              Your favorite list is empty
            </Text>
          </Container>
        )
      } */}
    </Wrapper>
  )
}

export default MyList


const Wrapper = styled.section`
  padding: 1rem 5%;
  min-height: 100vh;
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`