const addProducts = (data) => {
  return {
    type: "SET_CART_ADD_ITEM",
    payload: data,
  };
};

export { addProducts };
