import React from "react";
import { Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
const AppViews = (props) => {
  const setIsAuthenticated = props.setIsAuthenticated;
  return (
    <React.Fragment>
      <Route
        path="/login"
        render={(props) => {
          return <Login setIsAuthenticated={setIsAuthenticated} {...props} />;
        }}
      />
      <Route
        path="/register"
        render={(props) => {
          return (
            <Register setIsAuthenticated={setIsAuthenticated} {...props} />
          );
        }}
      />
    </React.Fragment>
  );
};

export default AppViews;
