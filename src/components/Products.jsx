import React, { Component } from 'react';
import allItems from '../data/products.json';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: allItems,
      dropDownValue: 'lowtohigh',
      selectedItems: [],
      userLoggedIn: sessionStorage.getItem('userLoggedIn') || false,
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.directCheckout = this.directCheckout.bind(this);
    this.sortProducts = this.sortProducts.bind(this);
  }

  componentDidMount(){
    this.setState({ selectedItems: JSON.parse(sessionStorage.getItem("selectedItems")) || [] })
  }

  addToCart(itemData) {
    let newItems = this.state.selectedItems;
    newItems.push(itemData);
    sessionStorage.setItem("selectedItems", JSON.stringify(newItems));
    this.setState({ selectedItems: newItems });
  }

  removeFromCart(itemId) {
    let newItems = this.state.selectedItems;
    newItems = newItems.filter(function(item) {
      return item.id !== itemId
    });
    sessionStorage.setItem("selectedItems", JSON.stringify(newItems));
    this.setState({ selectedItems: newItems });
  }

  directCheckout(itemData) {
    let newItems = [itemData];
    sessionStorage.setItem("selectedItems", JSON.stringify(newItems));
    this.props.history.push('/checkout');
  }

  sortProducts(event) {
    let allItems = this.state.items;
    if(event.target.value === 'hightolow') {
      allItems = allItems.sort(function(item1, item2) { return (item2.price - item1.price) });
    } else {
      allItems = allItems.sort(function(item1, item2) { return (item1.price - item2.price) });
    }
    this.setState({ dropDownValue: event.target.value, items: allItems });
  }

  render() {
    let listItems = this.state.items.map((item) => <ListItem key={item.id} id={item.id} name={item.name} price={item.price} addedProducts={this.state.selectedItems} addToCart={this.addToCart} removeFromCart={this.removeFromCart} directCheckout={this.directCheckout} directCheckoutButtonShow={true}/>)
    return(
      <div className='container'>
        <div className="row">
          <div className="col-9">
            <label>
              <select className="form-control" value={this.state.dropDownValue} onChange={this.sortProducts}>
                <option value='lowtohigh'>Low To High</option>
                <option value='hightolow'>High To Low</option>
              </select>
            </label>
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listItems}
              </tbody>
            </table>
          </div>
          <div className="col-3">
            <Link to='/cart' className='btn btn-outline-primary'>Your Cart ({this.state.selectedItems.length})</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
