import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { cartActions } from "../store/cart/actions";
import { Link } from "react-router-dom";
import Form from '../modules/cart/Form';


class Stripe extends Component {

  render() {
    if (this.props.givenName) {
    return (
        <div>
          <div className="mb-3 homeButton">
            <Link to="/">
              <i class="fa fa-home fa-2x" aria-hidden="true"></i>
            </Link>
          </div>
          <div class="ml-4">
            <h1>Proceed my Order</h1>
            <h2 className="stepTitle"><span className="stepDelivery">Step 1</span> - Fill my delivery address</h2>
              <Form />
          </div>
        </div>
    );
  }
  else {
    return (
    <div class="ml-4">
      <h2 className="pleaseLogIn">Please Log in before proceeding to checkout
      <span class="glyphicon glyphicon-upload iconLogIn"></span></h2>
    </div>
    )
  }
  }
}

function mapStateToProps(state) {
  return {
    givenName: state.userReducer.givenName,
    familyName: state.userReducer.familyName,
    totalAmount: state.cartReducer.totalAmount,
  }
}

export default connect(mapStateToProps, cartActions)(Stripe);
