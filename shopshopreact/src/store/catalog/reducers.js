const initialState = {
  categories: [],
  products: [],
  product:{}
};

export default function catalogReducer(state=initialState, action) {
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
    case "PRODUCT_DETAILS":
      return {
        ...state,
        product: action.product
      }
    default:
      return state;
  }
}
