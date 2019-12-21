import * as types from "../actions/types";

const initialState = {
  checkout: []
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_CHECKOUT}`:
      return {
        ...state,
        checkout: payload
      };
    default:
      return state;
  }
}
