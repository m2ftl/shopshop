import React, { Component } from "react";
import "../App.css";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

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
      .then(response => {
        response.json();
      })
      .then(data => {
        if (data.status === "succeeded") {
          console.log("titi : ",data);
          // dispatch a success
        } else {
          console.warn("tata : ",data);
          // dispatch an error
        }
      });
  };
  render() {
    return (
        <div class="ml-4">
        <h1>Proceed my Order</h1>
        <h2>Step 1 - Fill my delivery address</h2>
        <div class="container-fluid">
          <div class="row">
            <div class="form-group mr-3">
              <label for="usr">First Name:</label>
              <input
                type="text"
                value={this.props.givenName}
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="pwd">Family Name:</label>
              <input
                type="text"
                value={this.props.familyName}
                class="form-control"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-xs-3 ml-0 p-0">
              <label for="pwd">Address:</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="form-group mr-3">
              <label for="pwd">ZIP Code:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label for="pwd">City:</label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>

        <h2>Step 2 - Proceed your payment</h2>
          <StripeCheckout
            token={this.onToken}
            amount={this.props.totalAmount*100}
            currency="EUR"
            stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
          />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    givenName: state.userReducer.givenName,
    familyName: state.userReducer.familyName,
    totalAmount: state.cartReducer.totalAmount
  }
}

export default connect(mapStateToProps)(Stripe);
