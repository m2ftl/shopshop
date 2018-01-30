import React, { Component } from 'react';
import './App.css';
import Categories from './modules/catalog/Categories';
import Cart from "./modules/cart/cart";
import User from "./modules/user/User";

class App extends Component {

  render() {
    return (
      <div>
        <Categories />
        <Cart />
        <User />
      </div>
    );
  }
}



export default App;
