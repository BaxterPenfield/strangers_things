import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Posts, Title, UserInfo } from "./components";
import Login from "./api/Login";

const App = () => {
  const tokenFromStorage = localStorage.getItem("jwt");
  const [token, setToken] = useState(tokenFromStorage);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [userDisplay, setUserDisplay] = useState(false);
  return (
    <div className="app">
      <Title
        setToken={setToken}
        setIsLoggingIn={setIsLoggingIn}
        setUserDisplay={setUserDisplay}
        token={token}
      />
      <Posts token={token} />
      {isLoggingIn ? <Login token={token} setToken={setToken} /> : null}
      {userDisplay ? <UserInfo token={token} userDisplay={userDisplay}/> : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
