import React, { Component } from 'react';
import AddItemButton from "./AddItemButton";
import RemoveItemButton from "./RemoveItemButton";
import DirectCheckoutButton from "./DirectCheckoutButton";

class ListItem extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.addOrRemoveButton = this.addOrRemoveButton.bind(this);
    this.directCheckout = this.directCheckout.bind(this);
    this.alreadyInCart = this.alreadyInCart.bind(this);
  }

  addOrRemoveButton() {
    if(this.alreadyInCart()) {
      return <RemoveItemButton removeFromCart={this.removeFromCart} />
    }
    return <AddItemButton addToCart={this.addToCart}/>
  }

  alreadyInCart(){
    let itemId = this.props.id
    return this.props.addedProducts.filter(function(element) { return element.id === itemId }).length === 1
  }

  addToCart() {
    this.props.addToCart(this.itemDetails());
  }

  removeFromCart() {
    this.props.removeFromCart(this.props.id);
  }

  directCheckout() {
    this.props.directCheckout(this.itemDetails());
  }

  itemDetails() {
    return { id: this.props.id, name: this.props.name, price: this.props.price }
  }

  render() {
    const directcheckoutbutton = this.props.directCheckoutButtonShow ? <DirectCheckoutButton directCheckout={this.directCheckout} /> : null;
    return(
      <tr key={this.props.id}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.addOrRemoveButton()} {directcheckoutbutton}</td>
      </tr>
    )
  }
}

export default ListItem;
