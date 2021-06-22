import { combineReducers } from "redux";
import carts from "./carts";
import auth from "./auth";
import products from "./products";
import category from "./category";
import users from "./users";

const reducer = combineReducers({
  carts,
  auth,
  products,
  category,
  users,
});

export default reducer;
