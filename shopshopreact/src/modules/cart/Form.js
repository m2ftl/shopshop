import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import "../../App.css";
import StripeCheckout from "react-stripe-checkout";


const validate = values => {
  const errors = {}

  // field should accept only letters and min 2 chars & max 30 chars
  var regex = /^[A-zÀ-ÖØ-öø-ÿ- ]{2,30}$/;
  var regex2 = /^[A-zÀ-ÖØ-öø-ÿ- 0-9]{2,30}$/;

  if (!values.username) {
    errors.username = 'Required';
  } else if (regex.test(values.username) === false) {
    errors.username = "That can't be a real name"
  }
  if (!values.userFamilyName) {
    errors.userFamilyName = 'Required';
  } else if (regex.test(values.userFamilyName) === false) {
    errors.userFamilyName = "That can't be a real family name"
  }
  if (!values.address) {
    errors.address = 'Required';
  } else if (regex2.test(values.address) === false) {
    errors.address = "That can't be a real address"
  }
  if (!values.zipCode) {
    errors.zipCode = 'Required'
  } else if (values.zipCode.length !==5) {
    errors.zipCode = 'Sorry, wrong Zip code'
  }
  if (!values.city) {
    errors.city = 'Required';
  } else if (regex.test(values.city) === false) {
    errors.city = "That city has a strange name..."
  }
  console.log(errors);
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (

  <div>
    <label>{label}</label>
    <input {...input} type={type} class="form-control" />
    {touched &&
      (error && <span className="errorForm">*{error}</span>)}
  </div>
)


class ContactForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      current:''
    }
  }

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

    const { handleSubmit, pristine, reset, submitting, invalid } = this.props;

    return (
      <div>
      <form onSubmit={handleSubmit}>
        <div className="formDeliveryCart">
          <div class="row">
            <div class="form-group mr-3">
              <Field
                name="username"
                type="text"
                component={renderField}
                label="First Name:"
              />
            </div>
            <div class="form-group">
              <Field
                name="userFamilyName"
                type="text"
                component={renderField}
                label="Family Name:"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-xs-3 ml-0 p-0">
              <Field
                name="address"
                type="text"
                component={renderField}
                label="Address:"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group mr-3">
              <Field
                name="zipCode"
                type="number"
                component={renderField}
                label="ZIP Code:"
              />
            </div>
            <div class="form-group">
              <Field
                name="city"
                type="text"
                component={renderField}
                label="City:"
              />
            </div>
          </div>
        </div>

        <button className="buttonDelivery buttonClear btn" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear all values
        </button>

        </form>

        <div>
        <h2 className="stepTitle"><span className="stepDelivery">Step 2</span> - Proceed your payment</h2>

          <div className="buttonCheckout">
            <StripeCheckout
              token={this.onToken}
              amount={this.props.totalAmount*100}
              currency="EUR"
              stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
              disabled={invalid || pristine || submitting}
            />
          </div>
        </div>
        </div>
    )
  }
}

// create new, "configured" function
let createReduxForm = reduxForm({
  // a unique name for the form
  form: 'contact',
  validate
})

// evaluate it for ContactForm component
ContactForm = createReduxForm(ContactForm)

export default ContactForm
