export function getCatalog(state) {
  return {
    categories: state.catalogReducer.categories,
    products: state.catalogReducer.products,
    product:state.catalogReducer.product
  }
}
