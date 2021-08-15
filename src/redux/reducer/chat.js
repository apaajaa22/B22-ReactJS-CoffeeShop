const initialState = {
  user: [],
  chat: []
}

const chat = (state=initialState, action) => {
  switch (action.type){
    case 'GET_USER_CHAT':
      return {
        ...state,
        user: action.payload
      }
    case 'GET_DETAIL_CHAT':
      return {
        ...state,
        chat: action.payload
      }
      default:
        return {
          ...state
        }
  }
}

export default chat