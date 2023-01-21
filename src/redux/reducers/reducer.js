const INIT_STATE = {
  cart: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "SUBTRACT_FROM_CART":
      const itemIndex2 = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex2].quantity > 1) {
        state.cart[itemIndex2].quantity -= 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else if (state.cart[itemIndex2].quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
