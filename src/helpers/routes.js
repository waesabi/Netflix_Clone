import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";
// check if user logged in
// protect roots

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const { path } = rest;
        console.log(location, path, user);
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.SIGN_IN,
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
