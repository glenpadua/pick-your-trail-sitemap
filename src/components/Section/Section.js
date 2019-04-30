import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SubTitle } from 'components/UI'
import { sortAlphabetically, normalizeText } from 'util/helpers'

const Wrapper = styled.section`
  padding-top: 50px
`

const ItemsWrapper = styled.ul`
  border-top: 1px dashed #ccc;
  list-style: none;
  padding-top: 9px;
  margin-left: 0;
  margin-right: 0;
`

const ListItem = styled.li`
  font-weight: 300;
  text-transform: capitalize;
  opacity: 0.8;
  padding: 9px 0;
  word-break: break-word;
`

const Item = ({ children, url, ...props }) => {
  return (
    <ListItem {...props}>
      <a href={url} target='_blank' rel='noopener noreferrer'>{children}</a>
    </ListItem>
  )
}

class Section extends Component {
  render () {
    const { title, data, normalize } = this.props
    return (
      <Wrapper>
        <div>
          <SubTitle>{title}</SubTitle>
        </div>
        <ItemsWrapper className='row'>
          {data.sort(sortAlphabetically).map((item, i) =>
            <Item
              key={i}
              url={item.url}
              className='col-6 col-sm-4 col-md-3 col-lg-3'
            >
              {normalize ? normalizeText(item.text) : item.text}
            </Item>
          )}
        </ItemsWrapper>
      </Wrapper>
    )
  }
}

Section.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  // If provided a function is run to normalize the text
  // by removing any '-' and capitilization
  normalize: PropTypes.bool
}

export default Section
