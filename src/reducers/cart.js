import * as types from "../actions/types";

const initialState = {
  cartItems: [],
  checkout: []
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
    default:
      return state;
  }
}
