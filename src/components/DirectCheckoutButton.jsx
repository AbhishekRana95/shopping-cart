import React, { Component } from 'react';
import Button from '../commons/Button';

class DirectCheckoutButton extends Component {
  render() {
    return(
      <Button name='Direct Checkout' actionToPerform={this.props.directCheckout} class='btn btn-outline-warning' />
    )
  }
}

export default DirectCheckoutButton;
