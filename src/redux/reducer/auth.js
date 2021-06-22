const initialState = {
  onAuth: false,
  token: null,
  message: "",
  isRegister: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_TOOGLE":
      return {
        ...state,
        onAuth: !state.onAuth,
      };
    case "SET_AUTH_LOGIN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_AUTH_LOGIN_FAILED":
      return {
        ...state,
        message: action.payload,
      };
    case "SET_AUTH_REGISTER":
      return {
        ...state,
        isRegister: !state.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default auth;
