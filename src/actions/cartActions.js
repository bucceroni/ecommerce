import * as types from "./types";
import * as api from "./api";

export function addCartItem(product) {
  this.clearCheckout();
  return async (dispatch, getState) => {
    let cartItems = getState().cart.cartItems;
    let payload = [];

    let isExist = cartItems.includes(product);

    if (isExist) {
      cartItems.map(item => {
        if (item.id === product.id) {
          item.total = item.total + 1;
          return payload.push(item);
        } else {
          return payload.push(item);
        }
      });
    } else {
      product.total = 1;
      payload = [...cartItems, product];
    }

    return dispatch({
      type: types.ADD_CART_ITEM,
      payload: payload
    });
  };
}

export function deleteCartItem(product) {
  return async (dispatch, getState) => {
    let cartItems = getState().cart.cartItems;
    let payload = [];

    cartItems.map(item => {
      if (item.id === product.id) {
        item.total = item.total - 1;
        if (item.total !== 0) {
          return payload.push(item);
        } else {
          return null;
        }
      } else {
        return payload.push(item);
      }
    });

    return dispatch({
      type: types.DELETE_CART_ITEM,
      payload: payload
    });
  };
}

export function cartCheckout(products) {
  return async dispatch => {
    let res = await api.cartCheckout(products);
    if (res.id) {
      this.cartPayables(res.id);
    }
    this.clearCartItems();
    return dispatch({
      type: types.CART_CHECKOUT,
      payload: res
    });
  };
}

export function cartPayables(id) {
  return async dispatch => {
    return dispatch({
      type: types.CART_PAYABLES,
      payload: await api.cartPayables(id)
    });
  };
}

export function clearCartItems() {
  return async dispatch => {
    return dispatch({
      type: types.CLEAR_CART_ITEMS,
      payload: []
    });
  };
}

export function clearCheckout() {
  return async dispatch => {
    return dispatch({
      type: types.CLEAR_CHECKOUT,
      payload: []
    });
  };
}
