import { createStore, combineReducers, applyMiddleware } from 'redux';
// import categoryReducer from './categories';
// import productReducer from './products';
import { cartReducer } from './cart';
import thunk from 'redux-thunk';
import { menuReducer } from './menu.js';
import { comboReducer } from './combo';

const reducers = {
  menu: menuReducer,
  combo: comboReducer,
  cart: cartReducer,
};

export default createStore(combineReducers(reducers), applyMiddleware(thunk));
