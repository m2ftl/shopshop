import React, { Component } from 'react';
import './App.css';
import Categories from './Categories';
import Cart from "./modules/cart/cart";

class App extends Component {

  render() {
    return (
      <div>
        <Categories />
        <Cart />
      </div>
    );
  }
}



export default App;
