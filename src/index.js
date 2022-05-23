import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Posts, Title, UserInfo, Messages } from "./components";
import Login from "./api/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const tokenFromStorage = localStorage.getItem("jwt");
  const [token, setToken] = useState(tokenFromStorage);
  return (
    <div className="app">
      <Router>
        <Title setToken={setToken} token={token} />
        <Switch>
          <Route exact path="/">
            <Posts token={token} />
          </Route>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/profile">
            <UserInfo token={token} />
          </Route>
          {/* <Route path="/messages">
            <Messages />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
