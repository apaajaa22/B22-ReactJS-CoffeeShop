/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ auth, children, ...rest }) {
  const { token } = auth
  return (
    <Route
      render={() => {
        if (token !== null) {
          return children
        } else {
          return <Redirect to="/login" />
        }
      }}
      {...rest}
    />
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(PrivateRoute)
