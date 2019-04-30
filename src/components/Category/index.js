import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 20px;
`

const CategoryName = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
`

const CategoryItem = styled.a`
  padding-bottom: 15px;
`

class Category extends Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
  }

  // Function to scroll
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

  componentDidUpdate () {
    // When the parent scrollTo state changes it initiates a rerender
    // at which point the scroll function is called when the id matches
    // the scrollTo value
    if (this.props.id === this.props.scrollTo) {
      this.scrollToMyRef()
    }
  }

  render () {
    const { name, values } = this.props
    return (
      <Wrapper className='row' ref={this.myRef}>
        <CategoryName className='col-12'>{name.toUpperCase()}</CategoryName>
        {values.map(itinerary =>
          <CategoryItem href={itinerary.url} className='col-12'>
            {itinerary.text}
          </CategoryItem>
        )}
      </Wrapper>
    )
  }
}

export default Category
