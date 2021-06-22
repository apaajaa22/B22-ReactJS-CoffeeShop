import { http } from "../../helpers/http";
const { REACT_APP_BACKEND_URL: URL } = process.env;

const getCategory = () => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/categories`);
    dispatch({
      type: "SET_GET_CATEGORY",
      payload: { category: data.results, pageInfo: data.pageInfo },
    });
  };
};

const getProductCategory = (id, url) => {
  if (!url) {
    return async (dispatch) => {
      const { data } = await http().get(`${URL}/categories/${id}/products`);
      dispatch({
        type: "SET_PRODUCT_CATEGORY",
        payload: { productCategory: data.results, pageInfo: data.pageInfo },
      });
    };
  } else {
    return async (dispatch) => {
      const { data } = await http().get(url);
      dispatch({
        type: "SET_NEXT_PRODUCTS_CATEGORY",
        payload: { productCategory: data.results, pageInfo: data.pageInfo },
      });
    };
  }
};

export { getCategory, getProductCategory };
