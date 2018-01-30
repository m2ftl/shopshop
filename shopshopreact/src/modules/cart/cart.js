import React, {Component} from "react";
import { connect } from "react-redux";

class Cart extends React.Component{
  render(){
    const cartDisplay= this.props.products.map((element)=>
    <tr>
    <td>{element.decathlon_id}</td>
    <td>{element.title}</td>
    <td>{element.min_price}</td>
    <td><img src={element.image_path}/></td>
  </tr>)

    return(
      <div>
        <h1>Cart</h1>
        <table>{cartDisplay}</table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    products: state.Cart.productsCarted
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


export default connect (mapStateToProps) (Cart);
