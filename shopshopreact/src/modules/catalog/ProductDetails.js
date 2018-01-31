import React, { Component } from 'react';
import { connect } from "react-redux";
import '../../App.css';
import { catalogActions } from "../../store/catalog/actions";
import { getCatalog } from "../../store/catalog/selectors";
import { Link } from "react-router-dom";

class ProductDetails extends Component {

  componentWillMount(){
    this.props.getProductDetails(this.props.match.params.id);
  }

  render() {
    if(this.props.product.title) {

    return (
      <div className="container ProductDetails">
        <div className="mb-3">
          <Link to="/">
            <i class="fa fa-home fa-2x" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="clear"></div>
        <div>
          <img src={"https://www.decathlon.fr/media/"+this.props.product.image_path} className="img-thumbnail" alt={this.props.product.title}/>
        </div>
        <div className="float-left ml-5">
          <div className="mb-3"><h1>{this.props.product.title}</h1></div>
          <div className="mb-5 product-description">{this.props.product.description}</div>
          <div className="float-left font-weight-bold price" role="alert"><h2>{this.props.product.min_price} €</h2></div>
          <div className="float-right">
            <Link to="/cart">
              <button className="btn btn-success">View Cart</button>
            </Link>
          </div>
          <div className="float-right mr-3">
              <button
                onClick={() => this.props.AddProductToCart(this.props.product)}
                type="button"
                className="btn btn-outline-success">Add to Cart
              </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
    }
  }
}

export default connect(getCatalog, catalogActions)(ProductDetails);
