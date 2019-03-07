import React, { Component } from 'react';
import Button from '../commons/Button';

class AddItemButton extends Component {
  render(){
    return(
      <Button name='Add To Basket' actionToPerform={this.props.addToCart} class='btn btn-outline-success' />
    )
  }
}

export default AddItemButton;
