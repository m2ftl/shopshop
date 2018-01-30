const initialState = {
  categories: [],
  products: []
};

export default function retrieveCatalog(state=initialState, action) {
  switch(action.type) {
    case "CATEGORIES":
      return {
        ...state,
        categories: action.categories
      };
    case "PRODUCTS":
      return {
        ...state,
        products: action.products
      }
    default:
      return state;
  }
}
