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
        width="100%"
        tabHorizontal
        distribution="space-between"
        alignment="center"
        padding="1.2rem 1.75rem"
        margin="0.2rem 0"
        className="sub-bar"
      >
        <Text
          size="1.65rem"
          weight="400"
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
          className="sub-text"
          tabVertical
          tabDistribution="flex-start"
        >
          <Text
            alignment="left"
            size="1.5rem"
            weight="200"
            lineHeight="145%"
            tabAlign="left"
          >
            {text1}
          </Text>
          <Text
            alignment="left"
            size="1.5rem"
            weight="300"
            lineHeight="150%"
            tabAlign="left"
          >
            {text2}
          </Text>
        </Container>
      }
    </Container>
  )
}

export default SingleFAQ
