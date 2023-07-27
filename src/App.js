import React, { Component } from 'react'
import Main from './Components/Main'
import Shop from './Components/Shop'

export default class App extends Component {
  state = {
    showComp: false
  }
  changeState = () => {
   this.setState({
    showComp: true
  })       
  }
  render() {
    return (
      <div>
        {
          this.state.showComp ? <Shop /> : <Main type={this.changeState} />
        }
      
      </div>
    )
  }
}
