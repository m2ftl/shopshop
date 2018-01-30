import React, { Component } from 'react';
import './App.css';
import Categories from './modules/catalog/Categories';
import Cart from "./modules/cart/cart";
import User from "./modules/user/User";
import ProductDetails from "./modules/catalog/ProductDetails";

class App extends Component {

  render() {
    return (
      <div>
      <div className="jumbotron">
      </div>
      <div>
        <User />
        <Categories />
        <ProductDetails />
        <Cart />
      </div>
      </div>
    );
  }
}



export default App;
