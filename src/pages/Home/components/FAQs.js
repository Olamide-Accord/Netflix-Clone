import React, { useState } from 'react'
import Container from 'components/Container'
import Button from 'components/Button'
import Input from 'components/Input'
import Text from 'components/Text'
import { faq } from 'db'
import styled from 'styled-components'
import SingleFAQ from './SingleFAQ'


const QuestionWrapper = styled.section`
  text-align: center;
  padding: 7% 10%;
  .sub-bar{
    background-color: ${(props) => props.theme.colors.faqBg};
    &:hover{
      background-color: rgba(78, 78, 78, 1);
    }
  }
  span{
    color: #fff;
    cursor: pointer;
  }
`

const FAQs = () => {
  return (
    <QuestionWrapper>
      <Text
        size="3.5rem"
        weight="800"
        alignment="center"
      >
        Frequently Asked Questions
      </Text>
      <Container
        vertical
        width="100%"
        margin="1.5rem 0"
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