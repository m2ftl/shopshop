const initialState = {
  categories: []
};

export default function retrieveCategories(state=initialState, action) {
  switch(action.type) {
    case "CATEGORIES":
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
}
