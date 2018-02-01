import React, { Component } from 'react';
import './App.css';
import Categories from './modules/catalog/Categories';
import Cart from "./modules/cart/cart";
import User from "./modules/user/User";
import ProductDetails from "./modules/catalog/ProductDetails";
import { Route, Switch, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import { Link } from "react-router-dom";
import cartLogo from './images/cart.png';
import Stripe from './utils/Stripe';

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
              <img src={cartLogo} width={'30px'} height={'25px'} />
              GO TO CART
            </button>
          </Link>
          </Navbar.Text>
      </Navbar>
      </div>
      <div>

      <Switch>
        <Route path="/cart" render={() => <Cart/>} />
        <Route path="/product/:id" render={(routerProps) => <ProductDetails {...routerProps}/>} />
        <Route path="/order" render={() => <Stripe/>} />
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



export default withRouter(App);
