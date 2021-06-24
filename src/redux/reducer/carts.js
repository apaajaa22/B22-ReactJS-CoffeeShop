const initialState = {
  products: [],
  totalProduct: 0,
  transaction: [],
};

const carts = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART_ADD_ITEM":
      return {
        ...state,
        products: [...state.products, ...[action.payload]],
      };
    case "SET_CREATE_TRANSACTION":
      return {
        ...state,
        transaction: action.payload,
      };
    default:
      return { ...state };
  }
};

export default carts;
