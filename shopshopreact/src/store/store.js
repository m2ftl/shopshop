import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catalogReducer from './catalog/reducers.js';
import cartReducer from './cart/reducers';
import userReducer from "./user/reducer";

let reducers = combineReducers({
  catalogReducer: catalogReducer,
  cartReducer: cartReducer,
  userReducer: userReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
