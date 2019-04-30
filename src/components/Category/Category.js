import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 40px;
`

const CategoryName = styled.div`
  font-weight: bold;
  padding-bottom: 20px;
  font-size: 17px;
`

const CategoryItem = styled.a`
  padding-bottom: 15px;
  opacity: 0.8;
  font-size: 15px;
`

class Category extends Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
  }

  // Function to scroll
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop - 70)

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
        <CategoryName className='col-12 col-md-2'>{name.toUpperCase()}</CategoryName>
        {values.map((itinerary, i) =>
          <Fragment key={i}>
            <CategoryItem href={itinerary.url} target='_blank' rel='noopener noreferrer' className='col-12 col-md-5'>
              {itinerary.text}
            </CategoryItem>
            {/* To add space under the category name in desktops */}
            {i % 2 ? <div className='col-md-2' /> : ''}
          </Fragment>
        )}
      </Wrapper>
    )
  }
}

Category.propTypes = {
  name: PropTypes.string,
  values: PropTypes.array
}

export default Category
