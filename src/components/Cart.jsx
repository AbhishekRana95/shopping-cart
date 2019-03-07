import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      addedProducts: JSON.parse(sessionStorage.getItem("selectedItems")) || []
    }
    this.removeFromCart = this.removeFromCart.bind(this)
  }

  removeFromCart(itemId) {
    let newItems = this.state.addedProducts;
    newItems = newItems.filter(function(value, index, arr) {
      return value.id !== itemId
    });
    sessionStorage.setItem("selectedItems", JSON.stringify(newItems));
    this.setState({ addedProducts: newItems });
  }

  render() {
    let productsAdded = this.state.addedProducts
    let listItems = productsAdded.map((item) => <ListItem key={item.id} id={item.id} name={item.name} price={item.price} cartView={true} removeFromCart={this.removeFromCart} addedProducts={this.state.addedProducts}/>);
    let totalCartValue = productsAdded.reduce(function(a, b){ return a + b.price }, 0);
    if(productsAdded.length === 0) {
      return(
        <div>
          <h3>Your Cart:</h3>
          <p>No Products Added.</p>
          <Link to='/products' className='btn btn-outline-warning'>Add Some Products</Link>
        </div>
      )
    }
    return (
      <div>
        <h3>Your Cart
          <span className='badge'>({totalCartValue})</span>
        </h3>
        <table className='table'><tbody>{listItems}</tbody></table>
        <Link to='/checkout' className='btn btn-outline-primary'>Checkout</Link>
        <Link to='/products' className='btn btn-outline-warning'>Continue Shopping</Link>
      </div>
    )
  }
}

export default Cart;
