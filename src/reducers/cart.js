import * as types from "../actions/types";

const initialState = {
  cartItems: [
    // {
    //   id: 1,
    //   name: "iPad Pro",
    //   brand: "Apple",
    //   description:
    //     "iPad Pro 64GB Prata Tela 12,9” - Retina Proc. Chip A10X Câm. 12MP + Frontal iOS 11 - Apple",
    //   price: 5800,
    //   currency: "BRL",
    //   image: "product_1.jpg",
    //   storeId: 1,
    //   store: "Magalu",
    //   total: 1
    // }
  ]
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
    default:
      return state;
  }
}
