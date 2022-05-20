import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Posts, UserInfo, Title } from './components';
import Login from './api/Login';

const App = () => {
  const tokenFromStorage = localStorage.getItem("jwt")
  const [token, setToken] = useState(tokenFromStorage)
  return <div>
    <Title />
    <Posts token={token}/>
    <Login token={token} setToken={setToken} />
    <UserInfo token={token}/>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);