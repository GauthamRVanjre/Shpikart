import { ActionTypes } from "../constants/ActionTypes";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  };
};

export function updateQuantity(productId, quantity) {
  return {
    type: "UPDATE_QUANTITY",
    payload: { id: productId, quantity },
  };
}
