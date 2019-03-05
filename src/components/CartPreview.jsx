import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from '../commons/Button';

class CartPreview extends Component {

  render(){
    const renderTooltip = props => (
      <div
        {...props}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3,
          ...props.style,
        }}
      >
        Simple tooltip
      </div>
    );

    const Example = () => (
      <OverlayTrigger
        placement="right-start"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button name='Your Cart' class='btn btn-outline-success' />
      </OverlayTrigger>
    );
    return(
      <Example />
    )
  }
}

export default CartPreview;
