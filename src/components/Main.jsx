import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from "./Home";
import Checkout from "./Checkout";
import Products from "./Products";
import Cart from "./Cart";

class Main extends Component {
  render(){
    return(
      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
      </main>
    )
  }
}

export default Main;
