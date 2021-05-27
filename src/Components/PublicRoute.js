import React from "react";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../Redux/Authentification/auth-selectors";
import { useSelector } from "react-redux";

export default function PublicRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
