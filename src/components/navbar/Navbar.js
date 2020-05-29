import React from "react";
import { withRouter, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav>
        <span className="logo lg">Kandy Korner</span>
        <div>
          <NavLink to="/login" className="navlink">
            LOGIN
          </NavLink>
          <NavLink to="/register" className="navlink">
            REGISTER
          </NavLink>
          <NavLink to="/products" className="navlink">
            PRODUCTS
          </NavLink>
          <NavLink to="/products" className="navlink">
            EMPLOYEES
          </NavLink>
          <NavLink to="/products" className="navlink">
            LOCATIONS
          </NavLink>
          <NavLink to="/products" className="navlink">
            LOGOUT
          </NavLink>
        </div>
      </nav>
      <div className="nav-colorband"></div>
    </>
  );
};

export default withRouter(Navbar);
