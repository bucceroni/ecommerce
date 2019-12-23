import * as types from "../actions/types";

const initialState = {
  cartItems: []
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.ADD_CART_ITEM}`:
      return {
        ...state,
        cartItems: [...state.cartItems, payload]
      };
    default:
      return state;
  }
}
