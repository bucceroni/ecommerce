import { combineReducers } from "redux";

import cart from "../reducers/cart";
import checkout from "../reducers/checkout";
import products from "../reducers/products";

const rootReducer = combineReducers({
  cart,
  checkout,
  products
});

export default rootReducer;
