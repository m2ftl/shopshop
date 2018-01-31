import React, { Component } from 'react';
import { connect } from "react-redux";
import '../../App.css';
import { catalogActions } from "../../store/catalog/actions";
import { getCatalog } from "../../store/catalog/selectors";
import Products from './Products';
import { Link } from "react-router-dom";
import cartLogo from '../../images/cart.png';


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ""
    };
  }

  componentDidMount(){
    this.props.retrieveCategories();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      current: event.target.value
    });
  };

  render() {
    let listCatReduce = this.props.categories.map((category) =>
      {
      if(category.label.toUpperCase().includes(this.state.current.toUpperCase())){
        return (<li
          key={category.decathlon_id}
          onClick={() => this.props.getProductsFromCategory(category.id)}>{category.label}
        </li>)
      }
      }
    )

    return (
      <div className="categories">
        <div className="listCat">
          <h1>Categories</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Search categories</label>
              <input type="text" id="search-category" value={this.state.current} onChange={this.handleSubmit}/>
            </div>
          </form>
          <ul>
            {listCatReduce}
          </ul>
        </div>
        <Products />
      </div>
    );
  }
}

export default connect(getCatalog, catalogActions)(Categories);
