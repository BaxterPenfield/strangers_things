import React, {useState} from "react";
import { registerUser } from "./index";

function Register() {
  const [usernameString, setUsernameString] = useState("");
  const [passwordString, setPasswordString] = useState("");
  return (
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
        <button>Register Account</button>
      </fieldset>
    </form>
  );
}

export default Register;
