import React from "react";

const Login = (props) => {
  return (
    <>
      <div>This is the Login component</div>
      <button
        onClick={() => {
          props.setIsAuthenticated(true);
          props.history.push("/products");
        }}
      >
        Log In
      </button>
    </>
  );
};

export default Login;
