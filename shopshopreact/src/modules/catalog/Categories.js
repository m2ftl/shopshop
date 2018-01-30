import React, { Component } from 'react';
import { connect } from "react-redux";
import '../../App.css';
import { catalogActions } from "../../store/catalog/actions";
import { getCatalog } from "../../store/catalog/selectors";
import Products from './Products';

class Categories extends Component {
  componentDidMount(){
    this.props.retrieveCategories();
  }

  render() {
    let listCatDisplay = this.props.categories.map((element) =>
        <li onClick={() => this.props.getProductsFromCategory(element.id)}>{element.label}</li>
    )

    return (
      <div className="container">
        <div className="listCat">
          <h1>Categories</h1>
          <ul>
            {listCatDisplay}
          </ul>
        </div>
        <Products />
      </div>
    );
  }
}

export default connect(getCatalog, catalogActions)(Categories);
