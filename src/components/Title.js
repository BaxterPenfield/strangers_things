import React from "react";
import Register from "../api/Register";

function Title() {
  return (
    <div id="title">
      <div id="header">
        <h1>Stranger's Things</h1>
        <h5>Check out and purchase a stranger's things!</h5>
      </div>
      <aside id="register-login">
        <Register />
        <button>Already signed up? Log in here</button>
      </aside>
    </div>
  );
}

export default Title;
