import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import { categoriesActions } from "./store/catalog/actions";
import { getCategories } from "./store/catalog/selectors";
import store from './store/store.js';

class Categories extends Component {
  componentDidMount(){
    this.props.retrieveCategories();
  }

  render() {
  console.log(this.props.categories);
    return (
      <div>
        <h1>Categories</h1>
      </div>
    );
  }
}

export default connect(getCategories, categoriesActions)(Categories);
