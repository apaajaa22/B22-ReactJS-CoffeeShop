import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import carts from "./carts";
import auth from "./auth";
import products from "./products";
import category from "./category";
import users from "./users";
import history from "./history";

const persistAuth = {
  storage,
  key: "auth",
};

const reducer = combineReducers({
  carts,
  auth: persistReducer(persistAuth, auth),
  products,
  category,
  users,
  history,
});

export default reducer;
