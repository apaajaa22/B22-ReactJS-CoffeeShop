import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Cart,
  ForgotPassword,
  History,
  Home,
  Login,
  Product,
  ProductDetail,
  Register,
  UserProfile,
} from "../../pages";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/productdetail">
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
