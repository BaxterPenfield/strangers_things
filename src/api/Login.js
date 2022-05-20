import React, { useState } from "react";
import { loginUser } from ".";

function Login({setToken}) {
  const [usernameString, setUsernameString] = useState("");
  const [passwordString, setPasswordString] = useState("");
  return (
    <form
      id="login"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          await loginUser(usernameString, passwordString).then(results => {
            setToken(results.data.token);
            localStorage.setItem('jwt', results.data.token);
          })
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
        <button>Login</button>
      </fieldset>
    </form>
  );
}



export default Login;
