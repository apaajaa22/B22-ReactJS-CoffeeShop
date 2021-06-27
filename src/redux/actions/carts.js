import { http } from "../../helpers/http";
const { REACT_APP_BACKEND_URL: URL } = process.env;

const addProducts = (data) => {
  return {
    type: "SET_CART_ADD_ITEM",
    payload: data,
  };
};

const createTransaction = (data, token) => {
  console.log("coba data masuk", data);
  return async (dispatch) => {
    const form = new URLSearchParams();
    data.forEach((product) =>
      product
        .filter((item) => item.amount !== 0)
        .forEach((item) => {
          form.append("product_id", item.id);
          form.append("product_amount", item.amount);
          form.append("product_variant", item.id_variant);
        })
    );
    form.append("payment_method", "Bank");
    try {
      const { data: newData } = await http(token).post(
        `${URL}/private/transactions`,
        form.toString()
      );
      dispatch({
        type: "SET_CREATE_TRANSACTION",
        payload: newData,
      });
      dispatch({
        type: "SET_TRANSACTION_SUCCESS",
        payload: window.alert(newData.message),
      });
      dispatch({
        type: "SET_CLEAR_PRODUCTS",
      });
    } catch (error) {
      dispatch({
        type: "SET_TRANSACTION_FAILED",
        payload: window.alert(error.response.data.message),
      });
    }
  };
};

export { addProducts, createTransaction };
