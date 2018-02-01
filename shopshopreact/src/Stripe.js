import React, { Component } from "react";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";

class Stripe extends Component {
  onToken = token => {
    fetch("/charge", {
      method: "POST",
      body: JSON.stringify({
        stripeData: token,
        products: [
          {id: 42, quantity: 2},
          {id: 1337, quantity: 1}
        ]
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log("response is : ",response);
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <StripeCheckout
            token={this.onToken}
            amount={999}
            currency="EUR"
            stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
          />
        </div>
        <div className="App-intro">
          <StripeCheckout
            token={this.onToken}
            amount={999}
            currency="EUR"
            stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
            email="toto@toto.com"
            name="My Demo of Stripe"
            description="Change me into a description"
          >
            <button className="btn btn-primary">Pay with a custom button</button>
          </StripeCheckout>
        </div>
      </div>
    );
  }
}

export default Stripe;
