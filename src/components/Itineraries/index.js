import React, { Component } from 'react'
import styled from 'styled-components'
import { SubTitle } from 'components/UI'
import Test from 'components/Test'
import Category from 'components/Category'

const Wrapper = styled.section`
  padding-top: 50px
`

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
    console.log(data)
    return (
      <Wrapper>
        <SubTitle>{title}</SubTitle>
        <Filters>
          {Object.keys(data).map(item =>
            <div>
              <a onClick={this.handleScroll(item)} key={item} href='#' style={{ paddingRight: '10px' }}>{item.toUpperCase()}</a>
            </div>
          )}
        </Filters>
        {Object.keys(data).map(key =>
          <Category
            id={key}
            name={key}
            values={data[key]}
            scrollTo={this.state.scrollTo}
          />
        )}
        <div>
          <a href='#' onClick={this.handleScroll('a')} >A</a>
        </div>
        <div>
          <a href='#' onClick={this.handleScroll('b')}>B</a>
        </div>
      </Wrapper>
    )
  }
}

export default Itineraries
