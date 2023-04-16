import React, {useState} from 'react'
import Container from 'components/Container';
import Text from 'components/Text';
import {PlusLg} from "@styled-icons/bootstrap"
import { Close } from 'styled-icons/evaicons-solid'

const SingleFAQ = ({title, text1, text2}) => {
  const [openSub, setOpenSub] = useState(false);
  
  return (
    <Container
      vertical
      tabVertical
      margin="0.2rem 0"
    >
      <Container
        horizontal
        tabWidth="100%"
        distribution="space-between"
        alignment="center"
        padding="1rem 1.75rem"
        margin="0.15rem 0"
        className="sub-bar"
        tabHorizontal
        mobileHorizontal
      >
        <Text
          size="1.85rem"
          weight="300"
        >
          {title}
        </Text>
        <span onClick={() => setOpenSub(!openSub)}>
          {openSub ? <Close size={35} /> : <PlusLg size={35} />}
        </span>
      </Container>
      {
        openSub && <Container
          vertical
          padding="0.75rem 1.75rem"
          alignment="center"
          className="sub-bar"
        >
          <Text
            alignment="left"
            size="1.5rem"
            weight="300"
            lineHeight="145%"
          >
            {text1}
          </Text>
          <Text
            alignment="left"
            size="1.5rem"
            weight="300"
            lineHeight="150%"
          >
            {text2}
          </Text>
        </Container>
      }
    </Container>
  )
}

export default SingleFAQ
