import React, { Component } from 'react';
import { connect } from "react-redux";
import '../../App.css';
import { cartActions } from "../../store/cart/actions";
import { getCatalog } from "../../store/catalog/selectors";

class Products extends Component {

  render() {

    let listPrdsDisplay = this.props.products.map((product) =>
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.min_price}€</td>
        <td><img alt={product.title} src={"https://www.decathlon.fr/media/"+product.image_path} width="60px" height="60px" /></td>
        <td><button onClick={() => this.props.AddProductToCart(product)}>Add to cart</button></td>
      </tr>
    )

    return (
      <div className="listProducts">
        <table>
          <thead>
            <tr>
              <th>Products List</th>
            </tr>
          </thead>
          <tbody>
            {listPrdsDisplay}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(getCatalog, cartActions)(Products);
