import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      addedProducts: JSON.parse(sessionStorage.getItem("selectedItems"))
    }
  }

  productNames() {
    return this.state.addedProducts.map(function(item) { return item.name }).join(", ");
  }

  totalPrice() {
    return this.state.addedProducts.reduce(function(a, b){ return a + b.price }, 0);
  }

  componentDidMount() {
    sessionStorage.removeItem("selectedItems")
  }

  render(){
    if(this.state.addedProducts === null) {
      return(
        <div className='container'>
          <div className="row">
            <div className="col-8">
              <h2>No Products added in the cart.</h2>
            </div>
            <div className="col-4">
              <h4>Want to order again?</h4>
              <Link to='/products' className='btn btn-outline-primary'>Continue Shopping</Link>
            </div>
          </div>
        </div>
      )
    }
    return(
      <div className='container'>
        <div className="row">
          <div className="col-8">
            <h2>Thank you for purchasing {this.productNames()} amounting ₹{this.totalPrice()}. It will be delivered shortly.</h2>
          </div>
          <div className="col-4">
            <h4>Want to order again?</h4>
            <Link to='/products' className='btn btn-outline-primary'>Continue Shopping</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;
