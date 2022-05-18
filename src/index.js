import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Posts, UserInfo } from './components';
import Register from './api/login/Register';
import Login from './api/login/Login';

const App = () => {
  const [token, setToken] = useState("")
  return <div>
    <Posts />
    <Register />
    <Login token={token} setToken={setToken} />
    <UserInfo/>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);