const initialState = {
  data: {},
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GET_PROFILE":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_UPDATE_PROFILE":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};

export default profile;
