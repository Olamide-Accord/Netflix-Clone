import React from 'react'
import Container from 'components/Container'
import Text from 'components/Text'
import { faq } from 'db'
import styled from 'styled-components'
import SingleFAQ from './SingleFAQ'


const QuestionWrapper = styled.section`
  text-align: center;
  padding: 7% 10%;
  .sub-bar{
    background-color: ${(props) => props.theme.colors.faqBg};
    cursor: pointer;
    &:hover{
      background-color: rgba(78, 78, 78, 1);
    }
  }
  .sub-text{
    background-color: ${(props) => props.theme.colors.faqBg};
  }
  span{
    color: #fff;
    cursor: pointer;
  }
  @media only screen and (max-width: 991px) {
    .sub-bar{
      flex-direction: row;
    }
  }
`

const FAQs = () => {
  return (
    <QuestionWrapper>
      <Text
        size="3rem"
        weight="800"
        alignment="center"
        tabAlign="left"
      >
        Frequently Asked Questions
      </Text>
      <Container
        vertical
        width="90%"
        margin="1.5rem auto"
        tabWidth="100%"
      >
        {
          faq.map((item) => {
            return (
              <SingleFAQ key={item.id} {...item} />
            )
          })
        }
      </Container>
    </QuestionWrapper>
  )
}

export default FAQs