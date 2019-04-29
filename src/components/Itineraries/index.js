import React from 'react'
import styled from 'styled-components'
import { SubTitle } from 'components/UI'

const Wrapper = styled.section`
  padding-top: 50px
`

const Itineraries = ({ title }) => {
  return (
    <Wrapper className='row'>
      <SubTitle>{title}</SubTitle>
    </Wrapper>
  )
}

export default Itineraries
