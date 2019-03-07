import React, { Component } from 'react';
import Button from '../commons/Button';

class RemoveItemButton extends Component {
  render(){
    return(
      <Button name='Remove from Basket' class='btn btn-outline-danger' actionToPerform={this.props.removeFromCart} />
    )
  }
}

export default RemoveItemButton;
