import React, { Component } from 'react'
import DataAppend from './DataAppend'

export default class DataSection extends Component {
  render() {
    return (
      <div>
        <div className="dataSection">
            <div className="dataFilters">
            <p>Collections</p>
            <select id="price">
                <option value="Default">Default</option>
                <option value="High">Price: High to Low</option>
                <option value="Low">Price: Low to High</option>
            </select>
            </div>
        </div>
        <DataAppend />
      </div>
    )
  }
}
