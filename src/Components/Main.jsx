import React, {Component} from 'react'
import Header from './Header'
import HeaderText from './HeaderText'

export default class Main extends Component {
  render() {
    console.log(this.props, 'Main');
    return (
      <div>
      <Header />
      <HeaderText type={this.props.type} />

      </div>
    )
  }
}
