import React, { Component } from 'react';
import './App.css';
import Categories from './modules/catalog/Categories';
import Cart from "./modules/cart/cart";
import User from "./modules/user/User";
import ProductDetails from "./modules/catalog/ProductDetails";
import { Route, Switch, withRouter } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <div>
      <div className="jumbotron">
      </div>
      <div>
      <Switch>
        <Route path="/cart" render={() => <Cart/>} />
        <Route path="/product/:id" render={(routerProps) => <ProductDetails {...routerProps}/>} />
        <Route render={() =>
          <div>
          <User />
          <Categories />
          </div>
        } />
      </Switch>
      </div>
      </div>
    );
  }
}



export default withRouter(App);
