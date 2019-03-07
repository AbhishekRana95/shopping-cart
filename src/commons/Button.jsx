import React, { Component } from 'react';

class Button extends Component {

  actionToPerform(){
    this.props.actionToPerform(this.props);
  }

  render() {
    return(
      <button onClick={this.props.actionToPerform.bind(this)} className={this.props.class}>{this.props.name}</button>
    )
  }
}

export default Button;
