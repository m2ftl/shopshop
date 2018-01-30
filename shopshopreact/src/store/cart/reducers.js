const initialState={
  productsCarted: [{decathlon_id: 1234, title: "testproduct", min_price:3, image_path:"https://www.decathlon.fr/media/835/8350534/zoom_2ec07fad67464648a94a5f2c6be18319.jpg", quantity: 2},
{decathlon_id: 5678, title: "testput", min_price:12, image_path:"https://www.decathlon.fr/media/835/8350534/zoom_2ec07fad67464648a94a5f2c6be18319.jpg", quantity: 1}],
}

export default function cart(state = initialState, action){
  switch(action.type){
    case "ADD_PRODUCT":
    let newArrayAddProduct = state.productsCarted.slice();
    newArrayAddProduct.splice(newArrayAddProduct.length, 0 , action.product);
    return{
      ...state,
      productsCarted: newArrayAddProduct
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
    return{
      ...state,
      productsCarted: newArrayDecreaseQuantity
    }
    default:
    return state;
  }
}
