import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authSelectors from "../Redux/Authentification/auth-selectors";

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps)(PublicRoute);
