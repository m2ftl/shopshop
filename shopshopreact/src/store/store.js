import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import retrieveCategories from './catalog/reducers.js';
import Cart from './cart/reducers';

let reducers = combineReducers({
  retrieveCategories: retrieveCategories,
  Cart: Cart
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
