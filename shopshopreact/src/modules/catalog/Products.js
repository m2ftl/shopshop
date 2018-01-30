import React, { Component } from 'react';
import { connect } from "react-redux";
import '../../App.css';
import { catalogActions } from "../../store/catalog/actions";
import { getCatalog } from "../../store/catalog/selectors";

class Products extends Component {

  render() {
    let listPrdsDisplay = this.props.products.map((element) =>
      <tr>
        <td>{element.title}</td>
        <td>{element.min_price}€</td>
        <td><img src={"https://www.decathlon.fr/media/"+element.image_path} width="60px" height="60px" /></td>
        <td><button>Add to cart</button></td>
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

export default connect(getCatalog, catalogActions)(Products);
