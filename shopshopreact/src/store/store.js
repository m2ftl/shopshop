import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import retrieveCategories from './catalog/reducers.js';

let reducers = combineReducers({
  retrieveCategories: retrieveCategories
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
