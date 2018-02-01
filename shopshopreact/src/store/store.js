import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catalogReducer from './catalog/reducers.js';
import cartReducer from './cart/reducers';
import userReducer from "./user/reducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  catalogReducer: catalogReducer,
  cartReducer: cartReducer,
  userReducer: userReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
