import { http } from "../../helpers/http";
const { REACT_APP_BACKEND_URL: URL } = process.env;

const getUser = (token) => {
  return async (dispatch) => {
    console.log("token dispa: ", token);
    const { data } = await http(token).get(`${URL}/private/profile`);
    console.log(data.results);
    dispatch({
      type: "SET_GET_USER",
      payload: data.results,
    });
  };
};

export { getUser };
