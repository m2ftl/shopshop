import React, { Component } from "react";
import "../App.css";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { cartActions } from "../store/cart/actions";
import { Link } from "react-router-dom";
import Form from '../modules/cart/Form';


class Stripe extends Component {
  onToken = token => {
    fetch("/charge", {
      method: "POST",
      body: JSON.stringify({
        stripeData: token,
        total: this.props.totalAmount
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "succeeded") {
          console.log("succeeded ! data is : ",data);
          return this.props.resetCart();
        } else {
          console.warn("tata : ",data);
          // dispatch an error
        }
      });
  };
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
          <h2><span className="stepDelivery">Step 1</span> - Fill my delivery address</h2>
          <div class="container-fluid">
            <Form />
          </div>

          <h2><span className="stepDelivery">Step 2</span> - Proceed your payment</h2>
          <div className="buttonCheckout">
              <StripeCheckout
                token={this.onToken}
                amount={this.props.totalAmount*100}
                currency="EUR"
                stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
              />
          </div>
          </div>
        </div>
    );
  }
  else {
    return (
    <div class="ml-4">
      <h2>Please Log in </h2>
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
    address: state.cartReducer.address
  }
}

export default connect(mapStateToProps, cartActions)(Stripe);
