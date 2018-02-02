
const initialState = localStorage.getItem("productsInCart")
  ? {productsCarted: JSON.parse(localStorage.getItem("productsInCart")),
    totalAmount: 0,
    payed:false}
  : {productsCarted: [],
    totalAmount: 0,
    payed:false};

export default function cartReducer(state = initialState, action){
  switch(action.type){
    case "ADD_PRODUCT":

      function findProductAlreadyAddToCart(element) {
        return element.decathlon_id === action.productsAddedToCart.decathlon_id;
      }
      const IndexProductAdded = state.productsCarted.findIndex(findProductAlreadyAddToCart);

      if(IndexProductAdded > -1){

        let productsAlreadyInCart = state.productsCarted.slice();
        productsAlreadyInCart[IndexProductAdded].quantity += 1
        localStorage.setItem("productsInCart", JSON.stringify(productsAlreadyInCart));
        return {
          ...state,
          productsCarted: productsAlreadyInCart
        }
      } else {
        let productsInCart = state.productsCarted.slice();
        productsInCart.splice(productsInCart.length,0,   {
            ...action.productsAddedToCart,
            quantity: 1
          });
        localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
        return{
          ...state,
          productsCarted: productsInCart,
          payed:false
      }}
    case "REMOVE_PRODUCT":
    let newArrayRemoveProduct = state.productsCarted.slice();
    newArrayRemoveProduct.splice(action.index, 1);
    localStorage.setItem("productsInCart", JSON.stringify(newArrayRemoveProduct));
    return{
      ...state,
      productsCarted: newArrayRemoveProduct
    }
    case "INCREASE_QUANTITY":
    let newArrayIncreaseQuantity = state.productsCarted.slice();
    newArrayIncreaseQuantity[action.index].quantity += 1;
    localStorage.setItem("productsInCart", JSON.stringify(newArrayIncreaseQuantity));
    return{
      ...state,
      productsCarted: newArrayIncreaseQuantity
    }
    case "DECREASE_QUANTITY":
    let newArrayDecreaseQuantity = state.productsCarted.slice();
    newArrayDecreaseQuantity[action.index].quantity -= 1;
    const newArray = newArrayDecreaseQuantity.filter(element => element.quantity > 0);
    localStorage.setItem("productsInCart", JSON.stringify(newArray));
    return{
      ...state,
      productsCarted: newArray
    }
    case "CALCULATE_AMOUNT":
    let sumPrice=0;
    state.productsCarted.map((product) =>
     sumPrice += product.quantity*product.min_price
    )
    sumPrice = Math.round(sumPrice*100)/100;
    console.log(sumPrice);
    return{
      ...state,
      totalAmount: sumPrice
    }
    case "RESET_CART":
      localStorage.clear();
      return {
        ...state,
        productsCarted: [],
        totalAmount: 0,
        payed:true
      };
    default:
      return state;
  }
}
