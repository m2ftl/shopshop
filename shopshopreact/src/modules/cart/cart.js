import React, {Component} from "react";
import { connect } from "react-redux";

class Cart extends React.Component{
  render(){
    const cartDisplay= this.props.products.map((element)=>
    <ul>{element.decathlon_id}</ul>)
    return(
      <div>
        <h1>Cart</h1>
        <span>{cartDisplay}</span>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    products: state.productsCarted
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
