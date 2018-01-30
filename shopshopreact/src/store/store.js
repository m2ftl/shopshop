import { createStore, applyMiddleware , combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Cart from "./cart/reducers";
import retrieveCategories from "./catalog/reducers";

let reducers = combineReducers({
  retrieveCategories: retrieveCategories,
  Cart: Cart});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
