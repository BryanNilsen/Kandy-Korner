import React from "react";
import { Route } from "react-router-dom";
import Login from "./auth/Login";

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
    </React.Fragment>
  );
};

export default AppViews;
