import React, { Component } from 'react';
import './App.css';
import Categories from './modules/catalog/Categories';
import Cart from "./modules/cart/cart";
import User from "./modules/user/User";

class App extends Component {

  render() {
    return (
      <div>
        <User />
        <Categories />
        <Cart />
      </div>
    );
  }
}



export default App;
