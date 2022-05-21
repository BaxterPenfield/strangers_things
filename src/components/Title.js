import React from "react";
import Register from "../api/Register";

const Title = ({ setUserDisplay, setIsLoggingIn, setToken }) => {
  return (
    <div id="title">
        <button onClick={async () => {
            setUserDisplay(true);
        }}>My Information</button>
      <div id="header">
        <h1>Stranger's Things</h1>
        <h5>Browse and purchase a stranger's things!</h5>
      </div>
      <aside id="register-login">
        <Register setToken={setToken} setIsLoggingIn={setIsLoggingIn} />
      </aside>
    </div>
  );
}

export default Title;
