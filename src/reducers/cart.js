import * as types from "../actions/types";

const initialState = {
  cartItems: [],
  checkout: [],
  payables: []
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.ADD_CART_ITEM}`:
      return {
        ...state,
        cartItems: payload
      };
    case `${types.DELETE_CART_ITEM}`:
      return {
        ...state,
        cartItems: payload
      };
    case `${types.CART_CHECKOUT}`:
      return {
        ...state,
        checkout: payload
      };
    case `${types.CART_PAYABLES}`:
      return {
        ...state,
        payables: payload
      };
    case `${types.CLEAR_CART_ITEMS}`:
      return {
        ...state,
        cartItems: payload
      };
    case `${types.CLEAR_CHECKOUT}`:
      return {
        ...state,
        checkout: payload,
        payables: payload
      };
    default:
      return state;
  }
}
