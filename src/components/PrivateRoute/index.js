import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { token } = props.auth;
  return (
    <Route
      render={() => {
        if (token !== null) {
          return props.children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
