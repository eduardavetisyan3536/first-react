import React, { Component } from "react";
import data from "../data.json";
import Modal from "./Modal";


export default class DataAppend extends Component {
  state = {
    product: [],
    show: false
  }
  transparent = (id) => {
    this.setState({
      product: [id]
    })
    this.setState({
      show: true
    })
  }
  changeShow = () => {
    this.setState({
      show: false
    })
  }
  
  render() {
    console.log(this.props.open, 'opennnn');
    return (
      <div>
        <div className="collections">
          {data.clothes.map((item) => {
            return (
              <div onClick={() =>this.transparent(item)} className="products">
                <img src={item.imageURL} alt="" />
                <p className="prodName">{item.brand}</p>
                <p className="prodDesc">{item.name}</p>
                <p className="prodPrice">Rs. {item.amount}</p>
              </div>
            );
          })}
        </div>
        {this.state.show ?<Modal>
            {this.state.product.map((item) => {
            return (
              <div className="products show-products">
                <img src={item.imageURL} alt="" />
                <p className="prodName">{item.brand}</p>
                <p className="prodDesc">{item.name}</p>
                <p className="prodPrice">Rs. {item.amount}</p>
                <i onClick={this.changeShow} class="fa-solid fa-xmark cross"></i>
              </div>
            );
          })}
          </Modal>: null }
        
      </div>
    );
  }
}
