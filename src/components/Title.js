import React from "react";
import Register from "../api/Register";
import { Link } from "react-router-dom";

const Title = ({ setToken, token }) => {
  return (
    <div id="title">
      <div id="header">
        <h1>Stranger's Things</h1>
        <h5>Browse and purchase a stranger's things!</h5>
      </div>
      <aside id="register-login">
        {token ? <Link to="/profile">Profile</Link> :  <Register setToken={setToken} /> }
      </aside>
    </div>
  );
}

export default Title;
