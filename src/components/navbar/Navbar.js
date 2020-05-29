import React from "react";
import { withRouter, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav>
        <span className="logo lg">Kandy Korner</span>
        <div>
          {!props.isAuthenticated && (
            <>
              <NavLink to="/login" className="navlink">
                LOGIN
              </NavLink>
              <NavLink to="/register" className="navlink">
                REGISTER
              </NavLink>
            </>
          )}
          {props.isAuthenticated && (
            <>
              <NavLink to="/products" className="navlink">
                PRODUCTS
              </NavLink>
              <NavLink to="/employees" className="navlink">
                EMPLOYEES
              </NavLink>
              <NavLink to="/locations" className="navlink">
                LOCATIONS
              </NavLink>
              <NavLink
                to="/home"
                className="navlink logout"
                onClick={() => props.setIsAuthenticated(false)}
              >
                LOGOUT
              </NavLink>
            </>
          )}
        </div>
      </nav>
      <div className="nav-colorband"></div>
    </>
  );
};

export default withRouter(Navbar);
