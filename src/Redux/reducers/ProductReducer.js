const cartInitialState = {
  cartItems: [],
};

function ProductReducer(state = cartInitialState, action = {}) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

export default ProductReducer;
