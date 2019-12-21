import * as types from "../actions/types";

const initialState = {
  products: []
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_PRODUCTS}`:
      return {
        ...state,
        products: payload
      };
    default:
      return state;
  }
}
