import React, { Component } from 'react'
import styled from 'styled-components'
import { SubTitle } from 'components/UI'
import Category from 'components/Category'

const Wrapper = styled.section`
  padding-top: 50px
`

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 15px 0;
  border-top: 1px dashed #ccc;
  border-bottom: 1px dashed #ccc;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`

const FilterLink = styled.a`
  font-weight: bold;
  padding-right: 15px;
`

class Itineraries extends Component {
  state = {
    scrollTo: ''
  }

  // Make the clicked category key the current
  // scrollTo value
  handleScroll = (scrollTo) => (e) => {
    e.preventDefault()
    this.setState({ scrollTo })
  }

  render () {
    const { title, data } = this.props
    return (
      <Wrapper>
        <SubTitle>{title}</SubTitle>
        {/* List of all the filters */}
        <Filters>
          {Object.keys(data).map(item =>
            <FilterLink onClick={this.handleScroll(item)} key={item} href='#' style={{ paddingRight: '15px' }}>{item.toUpperCase()}</FilterLink>
          )}
        </Filters>
        {/* List of the categories */}
        {Object.keys(data).map(key =>
          <Category
            id={key}
            name={key}
            values={data[key]}
            scrollTo={this.state.scrollTo}
          />
        )}
      </Wrapper>
    )
  }
}

export default Itineraries
