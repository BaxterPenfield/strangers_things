import React, { useState } from "react";
import { loginUser } from ".";

const Login = ({ setToken, setIsLoggingIn }) => {
  const [usernameString, setUsernameString] = useState("");
  const [passwordString, setPasswordString] = useState("");
  return (
    <div id="login">
      <form
        id="login-form"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await loginUser(usernameString, passwordString).then((results) => {
              setToken(results.data.token);
              localStorage.setItem("jwt", results.data.token);
            });
          } catch (error) {
            console.error(error.message);
          } finally {
            setIsLoggingIn(false);
          }
        }}
      >
        <fieldset>
          <input
            id="username-login"
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
            id="password-login"
            type="password"
            placeholder="password"
            value={passwordString}
            onChange={async (e) => {
              setPasswordString(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <button>Login</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
