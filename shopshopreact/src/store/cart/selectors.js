export function getCart(state) {
  return {
    productsCarted: state.cartReducer.productsCarted
  }
}
