const initialState = {
  message: "",
  transactions: "",
  successOrder: "",
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_LOGIN_FAILED":
      return {
        ...state,
        message: action.payload,
      };
    case "SET_TRANSACTION_SUCCESS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "SET_TRANSACTION_FAILED":
      return {
        ...state,
        successOrder: action.payload,
      };
    case "SET_CLEAR_MESSAGE":
      return {
        ...state,
        message: "",
      };
    default:
      return {
        ...state,
      };
  }
};
export default message;
