import { http } from "../../helpers/http";
const { REACT_APP_BACKEND_URL: URL } = process.env;

const getProducts = (url) => {
  if (!url) {
    return async (dispatch) => {
      const { data } = await http().get(`${URL}/products`);
      dispatch({
        type: "SET_GET_PRODUCTS",
        payload: { products: data.results, pageInfo: data.pageInfo },
      });
    };
  } else {
    return async (dispatch) => {
      const { data } = await http().get(url);
      dispatch({
        type: "SET_NEXT_PRODUCTS",
        payload: { products: data.results, pageInfo: data.pageInfo },
      });
    };
  }
};

const getDetailProducts = (id) => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/products/${id}`);
    dispatch({
      type: "SET_GET_DETAILS",
      payload: data.results,
    });
  };
};

export { getProducts, getDetailProducts };
