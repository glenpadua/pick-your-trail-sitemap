import React, { Component } from 'react'

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
      console.log(this.props.scrollTo)
      this.scrollToMyRef()
    }
  }

  render () {
    const { name, values } = this.props
    return (
      <div className='row' ref={this.myRef}>
        <div className='col-12'>{name.toUpperCase()}</div>
        {values.map(itinerary =>
          <a href={itinerary.url} className='col-12'>
            {itinerary.text}
          </a>
        )}
      </div>
    )
  }
}

export default Category
