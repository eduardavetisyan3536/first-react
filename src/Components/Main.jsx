import React, {Component} from 'react'
import Header from './Header'
import HeaderText from './HeaderText'

export default class Main extends Component {
  render() {
    console.log(this.props.name, 'Main');
    return (
      <div>
      <Header name={this.props.name} />
      <HeaderText type={this.props.type} />

      </div>
    )
  }
}
