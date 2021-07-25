import { http } from "../../helpers/http";
import { getUser } from "./users"
const { REACT_APP_BACKEND_URL: URL } = process.env;

export const updateProfile = (data, token) => {
  return async (dispatch) => {
    const form = new FormData();
    const sizeLimit = 1024 * 1024 * 2;
    if (data.file) {
      if (data.file.size > sizeLimit) {
        window.alert("File too large");
      }
      try {
        form.append("picture", data.file);
        const { data: newData } = await http(token).put(
          `${URL}/private/profile`,
          form
        );
        dispatch({
          type: "SET_UPDATE_PROFILE",
          payload: window.alert(newData.message),
        });
        dispatch(getUser(token))
      }
      catch (err){
        return window.alert(err.response.data.message);
      }
    }
    try {
      form.append("name", data.name);
      form.append("email", data.email);
      form.append("address", data.address);
      form.append("number", data.number);
      form.append("birth", data.date);
      // for (let i in data) {
      //   if (data[i] !== "") {
      //     form.append(i, data[i]);
      //   }
      // }
      const { data: newData } = await http(token).put(
        `${URL}/private/profile`,
        form
      );
      dispatch({
        type: "SET_UPDATE_PROFILE",
        payload: window.alert(newData.message),
      });
      dispatch(getUser(token))
    } catch (error) {
      return window.alert("failed to update");
    }
  };
};
