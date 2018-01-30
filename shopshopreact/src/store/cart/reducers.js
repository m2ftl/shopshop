import {mapDispatchToProps} from "./actions"

const initialState={
  productsCarted: []
}


export default function cartReducer(state = initialState, action){
  switch(action.type){
    case "ADD_PRODUCT":
    return{
      ...state,
      productsCarted: [
        ...state.productsCarted,
        {
          ...action.productsCarted,
          quantity: 1
        }
      ]
    }
    case "REMOVE_PRODUCT":
    let newArrayRemoveProduct = state.productsCarted.slice();
    newArrayRemoveProduct.splice(action.index, 1)
    return{
      ...state,
      productsCarted: newArrayRemoveProduct
    }
    case "INCREASE_QUANTITY":
    let newArrayIncreaseQuantity = state.productsCarted.slice();
    newArrayIncreaseQuantity[action.index].quantity += 1
    return{
      ...state,
      productsCarted: newArrayIncreaseQuantity
    }
    case "DECREASE_QUANTITY":
    let newArrayDecreaseQuantity = state.productsCarted.slice();
    newArrayDecreaseQuantity[action.index].quantity -= 1
    const newArray = newArrayDecreaseQuantity.filter(element => element.quantity > 0)
    return{
      ...state,
      productsCarted: newArray
    }
    default:
    return state;
  }
}
