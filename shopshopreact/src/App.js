import React, { Component } from 'react';
import './App.css';
import Categories from './modules/catalog/Categories';
import Cart from "./modules/cart/cart";
import User from "./modules/user/User";
import ProductDetails from "./modules/catalog/ProductDetails";
import { Route, Switch, withRouter, Redirect, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import cartLogo from './images/cart.png';
import Stripe from './utils/Stripe';
import { connect } from 'react-redux';

class App extends Component {


  render() {
    return (
      <div>
      <div className="jumbotron">
      </div>
      <div id="content">
      <Navbar>
          <Navbar.Text pullLeft><User /></Navbar.Text>
          <Navbar.Text pullRight>
          <Link to="/cart">
            <button className="navbar cartbutton">
              <img src={cartLogo} alt="cartLogo" width={'30px'} height={'25px'} />
              GO TO CART
            </button>
          </Link>
          </Navbar.Text>
      </Navbar>
      </div>
      <div>

      <Switch>
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/product/:id" render={(routerProps) => <ProductDetails {...routerProps}/>} />
        <Route path="/order" render={() => (
          this.props.payed ? (<Redirect to="/" />)
          : (<Stripe />)
          )} />
        <Route render={() =>
          <div>
          <Categories/>
          </div>
        } />
      </Switch>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    payed:state.cartReducer.payed
  }
}


export default withRouter(connect(mapStateToProps)(App));
