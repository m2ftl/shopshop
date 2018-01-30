import React from "react";
import { connect } from "react-redux";
import {mapStateToProps} from "../../store/cart/selectors"
import {mapDispatchToProps} from "../../store/cart/actions"

class Cart extends React.Component{
  render(){
    const cartDisplay= this.props.products.map((element, index)=>
    <tr>
    <td>{element.decathlon_id}</td>
    <td>{element.title}</td>
    <td>{element.min_price}€</td>
    <td><img src={element.image_path}/></td>
    <td><button onClick={this.props.decrement} value = {index} >-</button></td>
    <td>{element.quantity}</td>
    <td><button onClick={this.props.increment} value = {index} >+</button></td>
    <td><button onClick={this.props.remove} value = {index} >Remove</button></td>
  </tr>)

    return(
      <div>
        <h1>Cart</h1>
        <table>{cartDisplay}</table>
      </div>
    )
  }
}

//
// function mapDispatchToProps(dispatch){
//   return{
// "REMOVE_PRODUCT":
// "ADD_QUANTITY":
// "REMOVE_QUANTITY":
//   }
// }

export default connect (mapStateToProps, mapDispatchToProps) (Cart) ;
