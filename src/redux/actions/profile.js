import { http } from "../../helpers/http";
const { REACT_APP_BACKEND_URL: URL } = process.env;

export const updateProfile = (data, token) => {
  return async (dispatch) => {
    const sizeLimit = 1024 * 1024 * 2;
    if (data.file) {
      if (data.file.size > sizeLimit) {
        window.alert("File size is too large");
      }
    }
    try {
      const form = new FormData();
      form.append("name", data.name);
      form.append("email", data.email);
      form.append("address", data.address);
      form.append("number", data.number);
      form.append("picture", data.file);
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
    } catch (error) {
      return window.alert("failed to update");
    }
  };
};
