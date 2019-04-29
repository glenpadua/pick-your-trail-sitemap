import React from 'react'
import styled from 'styled-components'

const Title = styled.h4`
  padding-top: 20px;
  padding-bottom: 30px;
  opacity: 0.8;
`

const SubTitle = styled.h5`

`

const App = () => {
  return (
    <div className='container xs-full-width'>
      <Title>Pickyourtrail sitemap</Title>
      <SubTitle>Destinations</SubTitle>
    </div>
  )
}

export default App
