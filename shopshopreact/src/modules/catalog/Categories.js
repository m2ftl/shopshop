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
      current: "",
      sideClass: "",
      buttonpush: 0
    };
  }

  changeClass = (event) => {
      event.preventDefault();
      if (this.state.buttonpush === 0) {
        this.setState({
          sideClass:"active",
          buttonpush:1
        });
        this.forceUpdate();
      }
      else {
        this.setState({
          sideClass:"",
          buttonpush:0
        });
        this.forceUpdate();
      }
  };

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
        return (<li className="categoriesListStyle"
          key={category.decathlon_id}
          onClick={() => this.props.getProductsFromCategory(category.id)}>
            {category.label}
            <i class="glyphicon glyphicon-play-circle"></i>
        </li>)
      }
      }
    )

    return (
      <div className="wrapper">
      <nav id="sidebar" className={this.state.sideClass}>
      <h1>Categories</h1>
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" id="search-category" value={this.state.current} onChange={this.handleSubmit} placeholder="Search Category"/>
        </div>
      </form>
        <ul className="mt-3 m-0 p-0">
          {listCatReduce}
        </ul>
      </nav>
      <div id="content" className="mt-5 ml-5">
        <button type="button" id="sidebarCollapse" className="cartbutton" onClick={this.changeClass}>
        <i class="glyphicon glyphicon-align-left"></i>&nbsp;
        Categories
        </button>
      <Products />
      </div>
      </div>
    );
  }
}

export default connect(getCatalog, catalogActions)(Categories);
