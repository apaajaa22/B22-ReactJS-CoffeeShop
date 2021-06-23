import { http } from "../../helpers/http";
const { REACT_APP_BACKEND_URL: URL } = process.env;

const getHistory = (token) => {
  return async (dispatch) => {
    console.log("token dispa: ", token);
    const { data } = await http(token).get(`${URL}/private/transactions`);
    console.log(data.results);
    dispatch({
      type: "SET_GET_HISTORY",
      payload: data.results,
    });
  };
};

const getDetailHistory = (token, id) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/private/transactions/${id}`);
    dispatch({
      type: "SET_GET_DETAILS_HISTORY",
      payload: { results: data.results, invoice: data.invoice },
    });
  };
};

export { getHistory, getDetailHistory };
