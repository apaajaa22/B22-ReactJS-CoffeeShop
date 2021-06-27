const initialState = {
  onAuth: false,
  token: null,
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
    case "SET_AUTH_REGISTER":
      return {
        ...state,
        isRegister: state.isRegister,
      };
    case "SET_AUTH_LOGOUT":
      return {
        ...state,
        token: null,
      };
    default:
      return {
        ...state,
      };
  }
};
export default auth;
