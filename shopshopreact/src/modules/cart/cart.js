import React from "react";
import { connect } from "react-redux";
import { getCart } from '../../store/cart/selectors';
import { cartActions } from '../../store/cart/actions';

class Cart extends React.Component{

  componentDidMount() {
    console.log(this.props.productsCarted);
  }

  render(){
    const cartDisplay= this.props.productsCarted.map((product, index)=>
    <tr key="product.id">
    <td>{product.decathlon_id}</td>
    <td>{product.title}</td>
    <td>{product.min_price}€</td>
    <td><img alt={product.title} src={"https://www.decathlon.fr/media/"+product.image_path}/></td>
    <td><button onClick={this.props.decrement} value = {index} >-</button></td>
    <td>{product.quantity}</td>
    <td><button onClick={this.props.increment} value = {index} >+</button></td>
    <td><button onClick={this.props.remove} value = {index} >Remove</button></td>
  </tr>)

    return(
      <div>
        <h1>Cart</h1>
        <table><tbody>{cartDisplay}</tbody></table>
      </div>
    )
  }
}

export default connect (getCart, cartActions) (Cart);
