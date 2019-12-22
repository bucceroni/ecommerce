import * as types from "../actions/types";

const initialState = {
  cartItems: 2
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  console.log("reducer", type, payload);
  switch (type) {
    case `${types.SET_CART_ITEM}`:
      return {
        ...state,
        cartItems: payload
      };
    default:
      return state;
  }
}
