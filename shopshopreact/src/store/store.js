import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  categories: []
};

function cat(state=initialState, action) {
  switch(action.type) {
    case "CATEGORIES":
      let arrayCat = [];
      arrayCat.push(action.categories);
      return {
        categories: arrayCat,
      };
    default:
      return state;
  }
}

let store = createStore(cat, applyMiddleware(thunk));
export default store;
