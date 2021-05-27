import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authSelectors from "../Redux/Authentification/auth-selectors";

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps)(PrivateRoute);
