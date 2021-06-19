import { combineReducers } from "redux";
import carts from "./carts";
import auth from "./auth";
import products from "./products";

const reducer = combineReducers({
  carts,
  auth,
  products,
});

export default reducer;
