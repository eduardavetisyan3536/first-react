import React, { Component } from 'react'

export default class HeaderText extends Component {
  render() {
    // console.log(this.props, 'HeaderText');
    return (
      <div>
        <section className='headerText'>
          <div className="container">
            <h1>Wear better, look better.</h1>
            <p>Don't you just love being in apparel?</p>
            <button onClick={this.props.type} className='shopNowBtn'>Shop Now</button>
          </div>
        </section>
      </div>
    )
  }
}
