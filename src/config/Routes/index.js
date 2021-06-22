import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../../components";
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
        <Route exact path="/products">
          <Product />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <PrivateRoute path="/cart">
          <Cart />
        </PrivateRoute>
        <PrivateRoute path="/userprofile">
          <UserProfile />
        </PrivateRoute>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <PrivateRoute path="/history">
          <History />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
