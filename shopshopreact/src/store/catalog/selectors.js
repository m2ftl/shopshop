export function getCatalog(state) {
  return {
    categories: state.retrieveCatalog.categories,
    products: state.retrieveCatalog.products
  }
}
