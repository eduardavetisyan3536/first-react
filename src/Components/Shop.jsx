import React, { Component } from 'react'
import Header from './Header'
import Aside from './Aside'
import DataSection from './DataSection'

export default class Shop extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="topSection">
          <p>Home / Collections</p>
        </div>
        <div className="flexSections">
        <Aside />
        <DataSection />
        </div>
      </div>
    )
  }
}
