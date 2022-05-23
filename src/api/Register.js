import React, { useState } from "react";
import { registerUser } from "./index";
import { Link } from "react-router-dom";

const Register = ({ setIsLoggingIn }) => {
  const [usernameString, setUsernameString] = useState("");
  const [passwordString, setPasswordString] = useState("");
  const submitForm = async () => {
    document.getElementById("register").submit();
  };
  return (
    <>
      <form
        id="register"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await registerUser(usernameString, passwordString);
          } catch (error) {
            console.error(error.message);
          }
        }}
      >
        <fieldset>
          <input
            id="username"
            type="text"
            placeholder="username"
            value={usernameString}
            onChange={async (e) => {
              setUsernameString(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <input
            id="password"
            type="password"
            placeholder="password"
            value={passwordString}
            onChange={async (e) => {
              setPasswordString(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <button type="submit">Register Account</button>
        </fieldset>
      </form>
      <Link to="/login">Already have an account? Login here!</Link>
    </>
  );
};

export default Register;
