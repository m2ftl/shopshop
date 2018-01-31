import React, { Component } from 'react';
import { connect } from "react-redux";
import '../../App.css';
import { catalogActions } from "../../store/catalog/actions";
import { getCatalog } from "../../store/catalog/selectors";

class ProductDetails extends Component {

  render() {
    return (
      <div className="ProductDetails">
        <div><img src={"https://www.decathlon.fr/media/"+this.props.product.image_path} /></div>
        <div>{this.props.product.title}</div>
        <div>{this.props.product.description}</div>
        <div>{this.props.product.min_price} €</div>
        <div><button onClick={() => this.props.AddProductToCart(this.props.product)}>Add to Cart</button></div>
      </div>
    );
  }
}

export default connect(getCatalog, catalogActions)(ProductDetails);
