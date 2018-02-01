import React from "react";
import { connect } from "react-redux";
import { getCart } from '../../store/cart/selectors';
import { cartActions } from '../../store/cart/actions';
import { Link } from "react-router-dom";
import cartLogo from '../../images/cart.png';

class Cart extends React.Component{

  componentDidMount() {
    console.log(this.props.productsCarted);
  }

  render(){
    const cartDisplay= this.props.productsCarted.map((product, index)=>
    <tr key="product.id">
    <td>{product.decathlon_id}</td>
    <td>{product.title}</td>
    <td>
      <Link to={'/product/'+product.id}>
        <img alt={product.title} src={"https://www.decathlon.fr/media/"+product.image_path} width={"70px"}/>
      </Link>
    </td>
    <td>{product.min_price} €</td>
    <td><button onClick={this.props.decrement} value = {index} >-</button></td>
    <td>{product.quantity}</td>
    <td><button onClick={this.props.increment} value = {index} >+</button></td>
    <td className="removeButton"><button onClick={this.props.remove} value = {index} >Remove</button></td>
    <td className="bold priceArticle">{Math.round((product.quantity*product.min_price)*100)/100} €</td>
  </tr>)
    let sumPrice=0;
    this.props.productsCarted.map((product) =>
     sumPrice += product.quantity*product.min_price
  )

  sumPrice = Math.round(sumPrice*100)/100;
  console.log(this.props.productsCarted);
  if (this.props.productsCarted.length!==0){
      return(
        <div>
        <div className="mb-3 homeButton">
          <Link to="/">
            <i class="fa fa-home fa-2x" aria-hidden="true"></i>
          </Link>
        </div>
          <div className="titleCart">
            <img src={cartLogo} alt="cartLogo" width={'30px'} height={'25px'} />
            <h1>Cart</h1>
          </div>
          <table className="cartTable">
            <tbody>{cartDisplay}</tbody>
          </table>
          <h1 className="totalPrice">The total price is <span className="bold">{sumPrice} €</span></h1>
          <Link to={'/order/'}>
          <button onClick={this.props.calculateAmount} className="btn btn-success">Validate my order</button>
          </Link>
        </div>
      )
  }
  else {
    return(
    <div>
    <div className="mb-3 homeButton">
      <Link to="/">
        <i class="fa fa-home fa-2x" aria-hidden="true"></i>
      </Link>
    </div>
      <div className="titleCart">
        <img src={cartLogo} alt="cartLogo" width={'30px'} height={'25px'} />
        <h1>Cart is empty</h1>
      </div>
      <table className="cartTable">
        <tbody>{cartDisplay}</tbody>
      </table>
    </div>)
  }
  }
}

export default connect (getCart, cartActions) (Cart);
