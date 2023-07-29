import React, { Component } from 'react'
import Main from './Components/Main'
import Shop from './Components/Shop'
import Wishlist from './Components/Wishlist'

export default class App extends Component {
  state = {
    showComp: false,
    wishlist: false
  }
  changeState = () => {
   this.setState({
    showComp: true
  })       
  }
  wishState = () => {
    this.setState({
     wishlist: true
   })       
   }
  render() {
    return (
      <div>
        {
          this.state.showComp ? <Shop /> : <Main type={this.changeState} />
        }
        {
          this.state.wishlist ? <Main /> : <Wishlist name={this.wishState} /> 
        }
      
      </div>
    )
  }
}
