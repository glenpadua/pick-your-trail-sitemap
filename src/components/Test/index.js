import React, { Component } from 'react'

class Test extends Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidUpdate () {
    if (this.props.id === this.props.scrollTo) {
      console.log(this.props.scrollTo)
      this.scrollToMyRef()
    }
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

  render () {
    return (
      <div className='col-md-12' style={{ margin: '500px 0' }} ref={this.myRef}>{this.props.text}</div>
    )
  }
}

export default Test
