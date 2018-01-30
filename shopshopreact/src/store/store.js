import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import retrieveCatalog from './catalog/reducers.js';
import Cart from './cart/reducers';
import userReducer from "./user/reducer";

let reducers = combineReducers({
  retrieveCatalog: retrieveCatalog,
  Cart: Cart,
  userReducer: userReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
