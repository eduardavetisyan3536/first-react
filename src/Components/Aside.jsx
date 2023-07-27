import React, { Component } from 'react'

export default class Aside extends Component {
  render() {
    return (
      <div>
        <aside>
            <div className="topName">
                <p>Filters</p>
            </div>
            <div className="brand fontAside">
                <p>Brand</p>
            </div>
            <div className="category fontAside">
                <p>Category</p>
            </div>
        </aside>
      </div>
    )
  }
}
