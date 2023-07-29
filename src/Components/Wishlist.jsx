import React, { Component } from 'react'

export default class Wishlist extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
            <button onClick={this.props.name} > asdasda</button>
      </div>
    )
  }
}
