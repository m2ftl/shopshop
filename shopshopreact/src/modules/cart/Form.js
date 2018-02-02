import React from 'react';
import { Field, reduxForm } from 'redux-form';
import "../../App.css";

function validateInput() {

}

const validate = values => {
  const errors = {}

  // field should accept only letters and min 2 chars & max 30 chars
  var regex = /^[A-zÀ-ÖØ-öø-ÿ- ]{2,30}$/;

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
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
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


function ContactForm (props){
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
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
      <div>
        <button className="buttonDelivery buttonValidate btn" type="submit" disabled={pristine || submitting}>
          Validate
        </button>
        <button className="buttonDelivery buttonClear btn" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear all values
        </button>
      </div>
    </form>
  )
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
