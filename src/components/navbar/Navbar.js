import React from "react";
import { withRouter, NavLink } from "react-router-dom";

const Navbar = (props) => {
  const handleLogout = () => {
    sessionStorage.clear();
    props.setIsAuthenticated(false);
  };

  return (
    <>
      <nav>
        <span className="logo lg">Kandy Korner</span>
        <div>
          {!props.isAuthenticated && (
            <>
              <NavLink
                to="/login"
                className="navlink"
                activeClassName="activeLink"
              >
                LOGIN
              </NavLink>
              <NavLink
                to="/register"
                className="navlink"
                activeClassName="activeLink"
              >
                REGISTER
              </NavLink>
            </>
          )}
          {props.isAuthenticated && (
            <>
              <NavLink
                to="/products"
                className="navlink"
                activeClassName="activeLink"
              >
                PRODUCTS
              </NavLink>
              <NavLink
                to="/employees"
                className="navlink"
                activeClassName="activeLink"
              >
                EMPLOYEES
              </NavLink>
              <NavLink
                to="/locations"
                className="navlink"
                activeClassName="activeLink"
              >
                LOCATIONS
              </NavLink>
              <NavLink
                to="/login"
                className="navlink logout"
                activeClassName="activeLink"
                onClick={handleLogout}
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
