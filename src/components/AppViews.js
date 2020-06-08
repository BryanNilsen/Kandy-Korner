import React from "react";
import { Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Products from "./products/Products";
import ProductDetail from "./products/ProductDetail";
import ProductAddEdit from "./products/ProductAddEdit";
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
        exact
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
        path="/products/:productId(\d+)"
        render={(props) =>
          isAuthenticated ? (
            <ProductDetail
              userIsSupervisor={userIsSupervisor}
              productId={parseInt(props.match.params.productId)}
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
      <Route
        exact
        path="/products/add"
        render={(props) =>
          isAuthenticated ? (
            <ProductAddEdit status={"add"} {...props} />
          ) : (
            props.history.push("/login")
          )
        }
      />
      <Route
        exact
        path="/products/edit/:productId(\d+)"
        render={(props) =>
          isAuthenticated ? (
            <ProductAddEdit
              status={"edit"}
              productId={parseInt(props.match.params.productId)}
              {...props}
            />
          ) : (
            props.history.push("/login")
          )
        }
      />
    </React.Fragment>
  );
};

export default AppViews;
