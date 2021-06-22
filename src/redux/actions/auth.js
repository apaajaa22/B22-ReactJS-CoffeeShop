import { http } from "../../helpers/http";
const { REACT_APP_BACKEND_URL: URL } = process.env;
const toggleAuth = () => {
  return {
    type: "SET_AUTH_TOOGLE",
  };
};

const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);
    try {
      const { data } = await http().post(`${URL}/auth/login`, form.toString());
      dispatch({
        type: "SET_AUTH_LOGIN",
        payload: data.results.token,
      });
    } catch (error) {
      dispatch({
        type: "SET_AUTH_LOGIN_FAILED",
        payload: error.response.data.message,
      });
    }
  };
};

const authRegister = (email, password, phoneNumber) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);
    form.append("phone_number", phoneNumber);
    try {
      const { data } = await http().post(
        `${URL}/auth/register`,
        form.toString()
      );
      dispatch({
        type: "SET_AUTH_REGISTER",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_AUTH_LOGIN_FAILED",
        payload: error.response.data.message,
      });
    }
  };
};

export { toggleAuth, authLogin, authRegister };
