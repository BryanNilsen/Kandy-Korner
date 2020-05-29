import React from "react";

const Login = (props) => {
  return (
    <>
      <div className="center">
        <h1>Log In</h1>
        <form>
          <fieldset>
            <label htmlFor="username">username</label>
            <input name="username" type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">password</label>
            <input name="password" type="password" />
          </fieldset>
        </form>
        <button
          onClick={() => {
            props.setIsAuthenticated(true);
            props.history.push("/products");
          }}
        >
          Log In
        </button>
      </div>
    </>
  );
};

export default Login;
