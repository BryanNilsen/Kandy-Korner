import React from "react";
import { Route } from "react-router-dom";
import Login from "./auth/Login";

const AppViews = (props) => {
  return (
    <React.Fragment>
      <Route
        path="/login"
        render={(props) => {
          return <Login />;
        }}
      />
    </React.Fragment>
  );
};

export default AppViews;
