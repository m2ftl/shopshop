import React, { Component } from 'react';
import { connect } from "react-redux";
import '../../App.css';
import { catalogActions } from "../../store/catalog/actions";
import { getCatalog } from "../../store/catalog/selectors";
import { Link } from "react-router-dom";


class Products extends Component {

  render() {

    let listPrdsDisplay = this.props.products.map((product) =>
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.min_price}€</td>
        <td><img alt={product.title} src={"https://www.decathlon.fr/media/"+product.image_path} width="60px" height="60px" /></td>
        <td><Link to={'/product/'+product.id}>
              <button onClick={() => this.props.getProductDetails(product.id)}>View Details</button>
            </Link>
        </td>
        <td><button onClick={() => this.props.AddProductToCart(product)}>Add to cart</button></td>
      </tr>
    )

    return (
      <div className="listProducts ml-3 mt-5">
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

export default connect(getCatalog, catalogActions)(Products);
