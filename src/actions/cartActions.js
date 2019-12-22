import * as types from "./types";

export function setCartItem(product) {
  console.log("action", product);
  return dispatch =>
    dispatch({
      type: types.SET_CART_ITEM,
      payload: 4
    });
}
