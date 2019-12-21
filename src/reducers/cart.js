import * as types from "../actions/types";

const initialState = {
  cart: []
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_CART}`:
      return {
        ...state,
        cart: payload
      };
    default:
      return state;
  }
}
