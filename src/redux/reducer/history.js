const initialState = {
  history: [],
  details: [],
};

const getHistory = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GET_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "SET_GET_DETAILS_HISTORY":
      return {
        ...state,
        details: action.payload,
      };
    case "SET_CLEAR_HISTORY":
      return {
        ...state,
        history: [],
      };
    default:
      return { ...state };
  }
};

export default getHistory;
