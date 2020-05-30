import React from "react";
import { Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Products from "./products/Products";
import Employees from "./employees/Employees";
import EmployeeDetail from "./employees/EmployeeDetail";
import Locations from "./locations/Locations";

const AppViews = (props) => {
  const setIsAuthenticated = props.setIsAuthenticated;
  const isAuthenticated = props.isAuthenticated;
  const userIsSupervisor = props.userIsSupervisor;

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

      <Route
        path="/products"
        render={(props) =>
          isAuthenticated ? (
            <Products {...props} />
          ) : (
            props.history.push("/login")
          )
        }
      />
      <Route
        exact
        path="/employees"
        render={(props) =>
          isAuthenticated ? (
            <Employees {...props} />
          ) : (
            props.history.push("/login")
          )
        }
      />
      <Route
        path="/employees/:employeeId(\d+)"
        render={(props) =>
          isAuthenticated ? (
            <EmployeeDetail
              userIsSupervisor={userIsSupervisor}
              employeeId={parseInt(props.match.params.employeeId)}
              {...props}
            />
          ) : (
            props.history.push("/login")
          )
        }
      />
      <Route
        exact
        path="/locations"
        render={(props) =>
          isAuthenticated ? (
            <Locations {...props} />
          ) : (
            props.history.push("/login")
          )
        }
      />
    </React.Fragment>
  );
};

export default AppViews;
