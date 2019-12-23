import * as types from "./types";

export function addCartItem(product) {
  return async dispatch =>
    dispatch({
      type: types.ADD_CART_ITEM,
      payload: product
    });
}
