import React from "react";

const Register = (props) => {
  return (
    <>
      <div className="center">
        <h1>Register</h1>
        <form>
          <fieldset>
            <label htmlFor="username">username</label>
            <input name="username" type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">password</label>
            <input name="password" type="password" />
          </fieldset>
          <fieldset>
            <label htmlFor="firstName">first name</label>
            <input name="firstName" type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="lasName">last name</label>
            <input name="lasName" type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">phone</label>
            <input name="phone" type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="address">address</label>
            <input name="address" type="text" />
          </fieldset>
        </form>
        <button
          onClick={() => {
            props.setIsAuthenticated(true);
            props.history.push("/products");
          }}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default Register;
